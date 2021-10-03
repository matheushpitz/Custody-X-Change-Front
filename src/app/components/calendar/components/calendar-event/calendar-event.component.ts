import { Component, Input } from '@angular/core';
import { ICalendarEvent } from '../../interfaces/event.interface';

@Component({
    selector: 'app-calendar-event',
    templateUrl: './calendar-event.component.html',
    styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent {

    @Input('event') event: ICalendarEvent;

}