import { NgModule } from '@angular/core';
import { CalendarPageComponent } from './calendar-page.component';
import { CommonModule } from '@angular/common';
import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';

@NgModule({
    declarations: [
        CalendarPageComponent
    ],
    imports: [        
        CommonModule,
        CalendarPageRoutingModule,
        CalendarModule
    ]    
})
export class CalendarPageModule {

}