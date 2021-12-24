import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { UserService } from '@goal-front/shared';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})

export class UserAuthComponent implements OnInit {
  loginForm = true;
  errorText: string = null;
  loading: boolean;

  username: string;
  password: string;
  email: string;
  confirmPassword: string;
  registered: boolean;

  constructor(
    private matDialogRef: MatDialogRef<UserAuthComponent>,
    private userService: UserService,
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void { }

  close(): void {
    this.matDialogRef.close();
  }

  toggleForm(login: boolean) {
    this.loginForm = login;
    this.reset();
  }

  login() {
    this.errorText = null;
    this.loading = true;
    this.userService.userLogin(this.username, this.password).subscribe((err) => {
      this.loading = false;
      if (err) {
        this.errorText = err;
      }
      else {
        this.close();
      }
    })
  }

  register() {
    if (!this.invalidRegisterForm()) {
      this.userService.registerUser(this.email, this.username, this.password, this.confirmPassword).subscribe((err) => {
        if (!err) {
          this.registered = true;
          this.toggleForm(true);
        }
        if (err.email) {
          this.errorText = err.email;
          return;
        }
        if (err.username) {
          this.errorText = err.username;
          return;
        }
        if (err.password) {
          this.errorText = err.password;
          return;
        }
        if (err.confirm_password) {
          this.errorText = err.confirm_password;
          return;
        }
      })
    }
    else {
      this.errorText = this.invalidRegisterForm();
    }
  }

  private invalidRegisterForm(): any {
    if (this.username.length < 3)
      return 'მომხმარებლის ნიკი უნდა იყოს 3 სიმბოლოზე მეტი';
    if (this.password.length < 6)
      return 'პაროლი უნდა იყოს 6 სიმბოლოზე მეტი';
    if (this.password !== this.confirmPassword)
      return 'პაროლები არ ემთხვევა';
    if (this.email.indexOf('@') === -1)
      return 'ელ-ფოსტა არასწორია';
    return false;
  }

  private reset(): void {
    this.username = null;
    this.password = null;
    this.email = null;
    this.confirmPassword = null;
    this.errorText = null;
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      x => {
        this.userService.setAuthFacebook(x.authToken);
        this.close();
      }
    );
  }

}
