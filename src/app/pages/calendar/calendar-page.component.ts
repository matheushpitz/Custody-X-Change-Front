import { Component, OnInit } from '@angular/core';
import { MatchApiProviderService } from './services/match-api-provider.service';
import { Observable } from 'rxjs';
import { ICalendarEvent } from 'src/app/components/calendar/interfaces/event.interface';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

    public events$: Observable<ICalendarEvent[]>;

    constructor(
        private matchApiProvider: MatchApiProviderService
    ) {}

    ngOnInit(): void {
        this.events$ = this.matchApiProvider.getMatches().pipe(map(x => {
            return x.map(y => {
                const d = new Date(y.date);
                d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
                return {
                    title: `${y.team1} x ${y.team2}`,
                    date: d
                };
            });
        }));
    }

}