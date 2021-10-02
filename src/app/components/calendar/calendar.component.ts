import { Component } from '@angular/core';
import { CalendarService } from './services/calendar.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [ CalendarService ]
})
export class CalendarComponent {

    public dates$: Observable<Date[]> = this.calendarService.dates$;

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