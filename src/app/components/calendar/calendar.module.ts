import { NgModule, ModuleWithProviders } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';
import { CommonModule } from '@angular/common';
import { CalendarTranslateService } from './services/calendar-translate.service';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';

@NgModule({
    declarations: [
        CalendarComponent,
        CalendarDayComponent,
        CalendarEventComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CalendarComponent
    ]
})
export class CalendarModule {

    static forRoot(): ModuleWithProviders<CalendarModule> {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarTranslateService
            ]
        };
    }

    static forChild(): ModuleWithProviders<CalendarModule> {
        return {
            ngModule: CalendarModule
        };
    }

}