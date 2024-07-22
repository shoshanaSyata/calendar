import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

// export interface DialogData {
//   name: string;
// }

@Component({
  selector: 'app-subject-week',
  templateUrl: './subject-week.component.html',
  styleUrl: './subject-week.component.scss',
})
export class SubjectWeekComponent {
[x: string]: any;
  name: string | undefined;
  nameSubject:string| undefined;
  
  constructor(public dialog: MatDialog) {}

  subject = ':הנושא השבועי';
  //  dialogRef = dialog.open(UserProfileComponent, {
  //   height: '400px',
  //   width: '600px',
  // });


  
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.name = result;
      console.log(this.name);
    });
  }


}
