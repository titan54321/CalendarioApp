import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons,IonTitle, IonListHeader, IonDatetime, IonCheckbox ,IonBackButton, IonCardTitle, IonContent, IonCardContent, IonList, IonNav, IonItem, IonCardHeader ,IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
const {v4: uuidv4} = require('uuid');
import { EventI } from '../common/services/events.models';
import { FirestoreService } from '../common/services/firestore.service';
import { FirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButtons,IonCardContent, IonCheckbox, IonDatetime ,IonListHeader, IonBackButton,IonHeader, IonToolbar, IonTitle, IonNav, IonCardTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton, IonCardHeader]
})
export class CalendarPage implements OnInit {
  
  selectedDate: string = "2024-01-01";
  events: EventI[] = [];
  highlightedDate: any = [];

  
  constructor(private firestoreService: FirestoreService
    ,private router: Router) {
   
  }

  ngOnInit() {
    this.loadHighlightedDates();
  }

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;

    // Compruebo si la fecha seleccionada coincide con una fecha resaltada
    const isHighlighted = this.highlightedDate.some(
      (highlightedDate: { date: string; }) => highlightedDate.date === this.selectedDate?.toString().slice(0, 10) // Ensure date comparison in YYYY-MM-DD format
    );
    if (isHighlighted) {
      this.router.navigate(['/copy-events'], { queryParams: { date: this.selectedDate.slice(0, 10) } });
    }
  }

  async loadHighlightedDates(): Promise<void> {
    // Obtener fechas resaltadas desde Firebase Firestore
    this.firestoreService.getCollectionChanges<EventI>("events").subscribe(events => {
      // Filtrar las tareas que tienen un campo "datetime" definido y convertirlas al formato deseado
      this.highlightedDate = events
        .filter(event => event.date) // Filtrar tareas con datetime definido
        .map(event => ({
          // Convertir la fecha al formato deseado (YYYY-MM-DD)
          date: event.date,
          textColor: "#fff",
          backgroundColor: "#D7BDE2" // Usar color de la tarea como color de fondo, o un color por defecto si no está definido
        }));
    });
  }

  loadEventsByDate() {
    // this.firestoreService.getEventsByDate(this.selectedDate).subscribe(events => {
    //   this.events = events;
    // });
  }
  
  // Función para verificar si un evento ocurre en la fecha seleccionada
  

  isWeekday(date: Date): boolean {
    const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    return day !== 0 && day !== 6; // Enable weekdays only
  }
  
  onDateSelected(event: any) { 
    this.selectedDate = event.detail.value;
  }
 

  navigateToHome() {
    window.location.href = '/home'; // Replace with your page path
  }

  navigateToDepartments() {
    window.location.href = '/departments'; // Replace with your page path
  }

  navigateToProfile() {
    window.location.href = '/profile'; // Replace with your page path
  }
  
  navigateToCalendar() {
    window.location.href = '/calendar'; // Replace with your page path
  }

  NavigateToEvents() {
    window.location.href = '/events'; // Replace with your page path
  }

  addEvents() {
    window.location.href = '/add-event'; // Replace with your page path
  }

  // isWeekday1 = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const utcDay = date.getUTCDay();

  //   /**
  //    * Date will be enabled if it is not
  //    * Sunday or Saturday
  //    */
  //   return utcDay !== 0 && utcDay !== 6;
  // };

  highlightedDates1=[
    {
      date:'2024-01-22',
      textColor:'#98fb98',
      backgroundColor: '#2e8b57',
      description: 'Reinscripciones'
    },
    {
      date:'2024-01-23',
      textColor:'#98fb98',
      backgroundColor: '#2e8b57',
      description: 'Reinscripciones'
    },
    {
      date:'2024-01-24',
      textColor:'#98fb98',
      backgroundColor: '#2e8b57',
      description: 'Reinscripciones'
      // classes: 'last-day'
    },
    {
      date:'2024-02-05',
      textColor:'#d3d3d3',
      backgroundColor: '#666666',
      // classes: 'last-day'
    },
    {
      date:'2024-02-09',
      textColor:'#ff9460',
      backgroundColor: '#e84400',
      // classes: 'last-day'
    },
    {
      date:'2024-03-18',
      textColor:'#d3d3d3',
      backgroundColor: '#666666',
      // classes: 'last-day'
    },
    {
      date:'2024-03-25',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },

    {
      date:'2024-03-26',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-03-27',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-03-28',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-03-29',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-01',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-02',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-03',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-04',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-05',
      textColor:'#ffffff',
      backgroundColor: '#000000',
      // classes: 'last-day'
    },
    {
      date:'2024-04-19',
      textColor:'#000000',
      backgroundColor: '#ffd700',
      cssClass: 'square-highlight'
    },
    {
      date:'2024-05-01',
      textColor:'#ffffff',
      backgroundColor: '#666666',
    },
    {
      date:'2024-05-15',
      textColor:'#ffffff',
      backgroundColor: '#666666',
    },
    {
      date:'2024-05-31',
      textColor:'#ffffff',
      backgroundColor: '#dd0000',
    },
    {
      date:'2024-06-24',
      textColor:'#000000',
      backgroundColor: '#e84400',
    },
    {
      date:'2024-06-25',
      textColor:'#000000',
      backgroundColor: '#e84400',
    },
    {
      date:'2024-06-26',
      textColor:'#000000',
      backgroundColor: '#e84400',
    },
    {
      date:'2024-06-27',
      textColor:'#000000',
      backgroundColor: '#e84400',
    },
    {
      date:'2024-06-28',
      textColor:'#000000',
      backgroundColor: '#e84400',
    },

  ]


}
