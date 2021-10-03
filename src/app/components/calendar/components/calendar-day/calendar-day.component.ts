import { Component, Input } from '@angular/core';
import { NumberUtils } from 'src/app/utils/number.utils';
import { ICalendarEvent } from '../../interfaces/event.interface';
import { CalendarTranslateService } from '../../services/calendar-translate.service';
import { CalendarService } from '../../services/calendar.service';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
    selector: 'app-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {
    @Input('height') height: number;
    @Input('date') date: Date = new Date();
    @Input('showDay') showDay: boolean = false;
    @Input('events') events: ICalendarEvent[];    

    constructor(
        private calendarService: CalendarService,
        private calendarTranslate: CalendarTranslateService
    ) {
        
    }

    public get isToday() {
        const today = new Date();
        DateUtils.ignoreHours(today);

        return this.date.getTime() === today.getTime();
    }

    public getDate(): string {
        if(this.date.getTime() === this.calendarService.currentDate.getTime()) {
            return `${this.calendarTranslate.getShortMonth(this.date.getMonth())} ${this.date.getDate().toString()}`;
        }
        return this.date.getDate().toString();
    }

    public getDay(): string {        
        return this.calendarTranslate.getShortDay(this.date.getDay());    
    }

    public getEvents(): ICalendarEvent[] {
        if(this.events.length > 2) {
            const e = this.events.slice(0, 2);
            e.push({
                title: `${this.events.length - 2} more...`,
                date: new Date(this.date)
            });

            return e;
        }

        return this.events;
    }
}