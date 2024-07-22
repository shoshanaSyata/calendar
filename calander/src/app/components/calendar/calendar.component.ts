import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarDateFormatter, CalendarEvent, CalendarView } from 'angular-calendar';
import { DialogCalendarComponent } from './dialog-calendar/dialog-calendar.component';
import { CustomDateFormatter } from './calendarFormat.provider';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { CustomDateFormatter } from './calendarFormat.provider';
// import { DateAdapter } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  template: `
    <mwl-calendar-week-view [view]="view"></mwl-calendar-week-view>
  `,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  
})
export class CalendarComponent {
header:any= ['קטעי השראה','תפריט','פתיח להרצאה','הרצאות','כותרת לבעבור אבותינו'];

  constructor(private dialog: MatDialog) { }


  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();



  dayStartHour: number = 8;
  dayEndHour: number = 19;
  events: CalendarEvent[] = [];


  



  
  moveToPreviousWeek(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() - 7);
  }
  moveToToday(): void {
    this.viewDate = new Date();
  }
  moveToNextWeek(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() + 7);
  }


  openDialog(event: any): void {
    console.log("AAA",event);
    
    const dialogRef = this.dialog.open(DialogCalendarComponent, {
      width: '500px',
     
      data: { date: event.date }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
  
  addDocuments(segment:any){
    console.log(segment);
    
  }


}
