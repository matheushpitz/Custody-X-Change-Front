import { Component } from '@angular/core';
import { CalendarService } from './services/calendar.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [ CalendarService ]
})
export class CalendarComponent {

    constructor(
        private calendarService: CalendarService
    ) {}

    next() {
        this.calendarService.nextMonth();
    }

    previous() {
        this.calendarService.previousMonth();
    }

}