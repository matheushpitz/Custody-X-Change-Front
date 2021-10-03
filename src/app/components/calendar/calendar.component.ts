import { Component, Input } from '@angular/core';
import { CalendarService } from './services/calendar.service';
import { Observable, BehaviorSubject } from 'rxjs';
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

    private _modal: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public modal$: Observable<boolean> = this._modal.asObservable();

    public detailedDate: Date;

    constructor(
        private calendarService: CalendarService,
        private calendarTranslate: CalendarTranslateService
    ) {}

    public next() {
        this.calendarService.nextMonth();
    }

    public previous() {
        this.calendarService.previousMonth();
    }

    public get nextText(): string {
        return this.calendarTranslate.getTranslation('next');
    }

    public get previousText(): string {
        return this.calendarTranslate.getTranslation('previous');
    }

    public getTitle(d: Date): string {
        return `${this.calendarTranslate.getMonth(d.getMonth())} - ${d.getFullYear()}`;
    }

    public getEventsByDate(d: Date): ICalendarEvent[] {        
        if(this.events) {            
            return this.events.filter(x => x.date.getTime() === d.getTime());
        }

        return [];
    }

    public click(d: Date) {
        this.detailedDate = d;

        this._modal.next(true);
    }

    public closeModal() {
        this._modal.next(false);
    }

}