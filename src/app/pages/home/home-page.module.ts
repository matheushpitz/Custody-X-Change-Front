import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        RouterModule
    ]    
})
export class HomePageModule {

}