import { Component } from '@angular/core';
import { CalendarTranslateService } from './components/calendar/services/calendar-translate.service';
import { MultiLanguageCalendarTranslate } from './services/multi-language-calendar-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private language: CalendarTranslateService
  ) {

  }

  public switchLanguage() {
    (this.language as MultiLanguageCalendarTranslate).switchLanguage();
  }
}
