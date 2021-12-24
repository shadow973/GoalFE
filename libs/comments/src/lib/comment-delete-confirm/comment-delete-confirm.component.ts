import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-delete-confirm',
  templateUrl: './comment-delete-confirm.component.html',
  styleUrls: ['./comment-delete-confirm.component.scss']
})
export class CommentDeleteConfirmComponent implements OnInit {

  title: string;
  message: string;
  constructor(
    private dialogRef: MatDialogRef<CommentDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
  }

  close(confirmed) {
    this.dialogRef.close(confirmed);
  }
}
