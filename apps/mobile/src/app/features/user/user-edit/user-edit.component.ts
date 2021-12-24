import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserStore } from '@goal-front/shared';
import { UserService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  loading: boolean;
  user: any;
  newPassword: any;
  avatarFile: any;
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef<HTMLFormElement>;

  constructor(
    private matDialogRef: MatDialogRef<UserEditComponent>,
    private userStore: UserStore,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userStore.userData;
  }

  close(saved = false): void {
    this.matDialogRef.close(saved);
  }

  update() {
    if (this.newPassword) {
      this.user.password = this.newPassword;
    }
    this.userService.updateUserProfile(this.user).subscribe((d) => {
      this.close(true);
    });
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.user.avatar_new = reader.result;
  }


  favClubSelected(club: any) {
    this.user.club = club;
  }

  checkFBImage(image) {
    if (this.user.avatar_new) return this.user.avatar_new;

    let imagelength = image.search('facebook');
    if (imagelength > -1) {
      return image;
    } else {
      return environment.storage + '/' + image;
    }
  }

}
