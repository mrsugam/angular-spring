import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  alertTitle = 'Delete Confirmation';
  message = 'Are You Sure ?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<DialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.alertTitle = data.alertTitle || this.alertTitle;
      if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
}
}

