import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons,IonTitle, IonListHeader, IonDatetime, IonCheckbox ,IonBackButton, IonCardTitle, IonContent, IonCardContent, IonList, IonNav, IonItem, IonCardHeader ,IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { EventI } from '../common/services/events.models';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons,IonTitle, IonListHeader, IonDatetime, IonCheckbox ,IonBackButton, IonCardTitle, IonContent, IonCardContent, IonList, IonNav, IonItem, IonCardHeader ,IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton, CommonModule, FormsModule]
})
export class PruebaPage implements OnInit {

  selectedDate: Date;
  events: EventI[] = [];
  daysInMonth: Date[];

  constructor() {
 
  }

  ngOnInit() {
    
  }

  selectedHighlightedDay: { title: string } | null = null;

  // handleDayClick(day: Date) {
  //   // Check if the clicked day is a highlighted date
  //   if (this.isHighlightedDates(day)) {
  //     // Find the clicked day's information (assuming you have a way to identify titles based on dates)
  //     this.selectedHighlightedDay = { title: this.getHighlightedDayTitle(day) };
  //   } else {
  //     // Handle non-highlighted day clicks (optional)
  //     console.log('Clicked non-highlighted day:', day);
  //   }
  // }

  // isHighlightedDates(day: Date): boolean {
  //   const formattedDate = day.toISOString().slice(0, 10); // YYYY-MM-DD string
  // return this.highlightedDates.some(highlightedDate => highlightedDate.date === formattedDate);
  // }

  // getHighlightedDayTitle(day: Date): string{
  //   if (!this.highlightedDates || this.highlightedDates.length === 0) {
  //     return '';
  //   }
  //   const formattedDate = day.toISOString().slice(0, 10); // YYYY-MM-DD string
  //   const matchingDate = this.highlightedDates.find(highlightedDate => highlightedDate.date === formattedDate);
  
  //   if (matchingDate) {
  //     return matchingDate.title;
  //   }
  
  //   return '';
  // }


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

  // isWeekday1 = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const utcDay = date.getUTCDay();

  //   /**
  //    * Date will be enabled if it is not
  //    * Sunday or Saturday
  //    */
  //   return utcDay !== 0 && utcDay !== 6;
  // };

  highlightedDates=[
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
