import { Component, Input } from '@angular/core';
import { CalendarService } from './services/calendar.service';
import { Observable } from 'rxjs';
import { ICalendarEvent } from './interfaces/event.interface';
import { CalendarTranslateService } from './services/calendar-translate.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [ CalendarService ]
})
export class CalendarComponent {

    @Input('events') events: ICalendarEvent[] | null = null;

    public dates$: Observable<Date[]> = this.calendarService.dates$;
    public currentDate$: Observable<Date> = this.calendarService.currentDate$;

    constructor(
        private calendarService: CalendarService,
        private calendarTranslate: CalendarTranslateService
    ) {}

    next() {
        this.calendarService.nextMonth();
    }

    previous() {
        this.calendarService.previousMonth();
    }

    getTitle(d: Date): string {
        return `${this.calendarTranslate.getMonth(d.getMonth())} - ${d.getFullYear()}`;
    }

    getEventsByDate(d: Date): ICalendarEvent[] {        
        if(this.events) {            
            return this.events.filter(x => x.date.getTime() === d.getTime());
        }

        return [];
    }

}