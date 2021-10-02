import { Component, Input } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { NumberUtils } from 'src/app/utils/number.utils';

@Component({
    selector: 'app-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {
    @Input('date') date: Date = new Date();
    @Input('showDay') showDay: boolean = false;

    constructor(
        private calendarService: CalendarService
    ) {
        
    }

    public getDate(): string {        
        return NumberUtils.pad(this.date.getDate(), 2);
    }

    public getDay(): string {        
        return this.calendarService.translate.getShortDay(this.date.getDay());    
    }
}