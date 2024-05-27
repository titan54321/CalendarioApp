import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'departments',
    loadComponent: () => import('./departments/departments.page').then( m => m.DepartmentsPage)
  },
  {
    path: 'add-event',
    loadComponent: () => import('./add-event/add-event.page').then( m => m.AddEventPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'prueba',
    loadComponent: () => import('./prueba/prueba.page').then( m => m.PruebaPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'copy-events',
    loadComponent: () => import('./copy-events/copy-events.page').then( m => m.CopyEventsPage)
  },
  
];
