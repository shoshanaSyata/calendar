import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-calendar',
  templateUrl: './dialog-calendar.component.html',
  styleUrl: './dialog-calendar.component.scss',
})
export class DialogCalendarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCalendarComponent>,
    private http: HttpClient
  ) {}

  selectedFile: any = null;

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:4200/', formData);
  }

  onFileChange(event: any) {
    console.log(event, 'event');

    const file = event.target.files[0];
    this.selectedFile = event.target.files[0] ?? null;

    this.uploadFile(file).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
