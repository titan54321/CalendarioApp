import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomePage } from './home/home.page';
import { CalendarPage } from './calendar/calendar.page';
import { DepartmentsPage } from './departments/departments.page';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; 
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';


const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'calendar', component: CalendarPage },
  { path: 'departments', component: DepartmentsPage },
  // Add more routes for other pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule, AngularFireModule.initializeApp(environment)],// Initialize Firebase, IonicModule.forRoot(), NgForm, NgModel],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [RouterModule]
})
export class AppModule { }
