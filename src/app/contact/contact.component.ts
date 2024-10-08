import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: { animal: 'panda' },
    });
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [MatDialogTitle],
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
  
}

