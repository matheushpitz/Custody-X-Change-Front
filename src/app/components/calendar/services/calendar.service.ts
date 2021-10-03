import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DateUtils } from 'src/app/utils/date.utils';

@Injectable()
export class CalendarService implements OnDestroy {

    private _destroy: Subject<void>;
    private _currentDate: BehaviorSubject<Date>;
    private _calendarDates: BehaviorSubject<Date[]>;

    public dates$: Observable<Date[]>;
    public currentDate$: Observable<Date>;

    constructor() {        

        this._destroy = new Subject();
        this._currentDate = new BehaviorSubject(DateUtils.getCurrentYearMonth());
        this._calendarDates = new BehaviorSubject([] as Date[]);  
        
        this.dates$ = this._calendarDates.asObservable();
        this.currentDate$ = this._currentDate.asObservable();

        this._currentDate.pipe(takeUntil(this._destroy.asObservable())).subscribe(this.loadCalendarDays.bind(this));        
    }    
    ngOnDestroy(): void {
        this._destroy.next();
    }

    public nextMonth() {
        const current = this._currentDate.value;
        current.setMonth(current.getMonth() + 1);
        this._currentDate.next(current);
    }

    public previousMonth() {
        const current = this._currentDate.value;
        current.setMonth(current.getMonth() - 1);
        this._currentDate.next(current);
    }    

    private loadCalendarDays(d: Date) {
        const beginDate = DateUtils.getFirstDayOfDate(new Date(d));
        const endDate = DateUtils.getLastDayOfMonth(new Date(d));

        beginDate.setDate(beginDate.getDate() - beginDate.getDay());
        endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));

        const calendar = [];
        do {
            calendar.push(new Date(beginDate));
            beginDate.setDate(beginDate.getDate() + 1);
        } while(beginDate < endDate);

        this._calendarDates.next(calendar);
    }

}