import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SubjectWeekComponent } from './components/subject-week/subject-week.component';
import { HebrewDatePipe } from './pipe/hebrew-date.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/subject-week/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogCalendarComponent } from './components/calendar/dialog-calendar/dialog-calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

// import { AppComponent } from './app.component';

// import { SubjectWeekComponent } from './components/subject-week/subject-week.component';

// import { CalenderComponent } from './components/calender/calender.component';

// import { CalendarModule } from 'angular-calendar';
// import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SubjectWeekComponent,
    DialogComponent,
    // CalenderComponent,
    // SubjectWeekComponent
    HebrewDatePipe,
    DialogCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
