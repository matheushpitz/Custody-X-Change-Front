import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ICalendarEvent } from '../../interfaces/event.interface';
import { CalendarTranslateService } from '../../services/calendar-translate.service';

@Component({
    selector: 'app-calendar-details-modal',
    templateUrl: './calendar-details-modal.component.html',
    styleUrls: ['./calendar-details-modal.component.scss']
})
export class CalendarDetailsModal implements OnInit, OnDestroy {

    @Input('date') date: Date;
    @Input('events') events: ICalendarEvent[] = [];

    @Output('close') close: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private calendarTranslate: CalendarTranslateService
    ) {}    

    ngOnInit(): void {
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener('keydown', this.onKeyDown);
    }

    ngOnDestroy(): void {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    public closeModal() {
        this.close.emit();
    }

    public get title(): string {
        return this.calendarTranslate.getFullDate(this.date);
    }

    public get noEvents(): string {
        return this.calendarTranslate.getTranslation('no-events');
    }

    private onKeyDown(e: any) {
        if(e.key === 'Escape') {
            this.closeModal();
        }
    }

}