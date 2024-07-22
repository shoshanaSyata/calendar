import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements AfterViewInit{



  
  @ViewChild('inputField', { static: false })
  inputField!: ElementRef;  
    
  ngAfterViewInit() {
      this.inputField.nativeElement.focus();
    }
  



  name: string | undefined;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(this.name);
  }
}
