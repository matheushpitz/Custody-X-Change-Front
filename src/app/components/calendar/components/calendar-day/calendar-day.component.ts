import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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

    @ViewChild('calendarDay') calendarDay: ElementRef;
    @ViewChild('header') header: ElementRef;

    constructor(
        private calendarService: CalendarService,
        private calendarTranslate: CalendarTranslateService,
        private cdr: ChangeDetectorRef
    ) {
        
    }

    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }

    public get isToday() {
        const today = new Date();
        DateUtils.ignoreHours(today);

        return this.date.getTime() === today.getTime();
    }

    public getDate(): string {
        let month = '';
        if(this.date.getDate() === 1) {
            month = `${this.calendarTranslate.getShortMonth(this.date.getMonth())} `
        }
        return month + this.date.getDate().toString();
    }

    public getDay(): string {        
        return this.calendarTranslate.getShortDay(this.date.getDay()).toUpperCase();    
    }

    public getEvents(): ICalendarEvent[] {
        let maxShownEvents = 1;

        if(this.calendarDay && this.header) {
            const cDay = this.calendarDay.nativeElement.clientHeight;
            const h = this.header.nativeElement.clientHeight;
            maxShownEvents = Math.floor((cDay - h) / 25) - 1;            
        }

        if(this.events.length > maxShownEvents) {
            const e = this.events.slice(0, maxShownEvents);
            e.push({
                title: `${this.events.length - maxShownEvents} more...`,
                date: new Date(this.date)
            });

            return e;
        }

        return this.events;
    }
}