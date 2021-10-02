import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'calendar',
        loadChildren: () => import('./pages/calendar/calendar-page.module').then(m => m.CalendarPageModule)
      },
      {
        path: '**',
        redirectTo: ''        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
