import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageModule } from './pages/home/home-page.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { MultiLanguageCalendarTranslate } from './services/multi-language-calendar-translate.service';
import { CalendarTranslateService } from './components/calendar/services/calendar-translate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomePageModule,
    CalendarModule.forRoot(),    
    HttpClientModule
  ],
  providers: [
    {
      provide: CalendarTranslateService,
      useClass: MultiLanguageCalendarTranslate
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
