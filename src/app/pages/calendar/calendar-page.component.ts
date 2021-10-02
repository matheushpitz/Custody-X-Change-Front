import { Component } from '@angular/core';
import { MatchApiProviderService } from './services/match-api-provider.service';

@Component({
    selector: 'app-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent {

    constructor(
        private matchApiProvider: MatchApiProviderService
    ) {
        this.matchApiProvider.getMatches();
    }

}