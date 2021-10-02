import { NgModule } from '@angular/core';
import { CalendarPageComponent } from './calendar-page.component';
import { CommonModule } from '@angular/common';
import { CalendarPageRoutingModule } from './calendar-page-routing.module';

@NgModule({
    declarations: [
        CalendarPageComponent
    ],
    imports: [        
        CommonModule,
        CalendarPageRoutingModule
    ]    
})
export class CalendarPageModule {

}