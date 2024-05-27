import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItemOptions, IonAvatar ,IonItemSliding ,IonItemOption,IonTitle, IonIcon,IonToolbar, IonButtons,IonList, IonSearchbar, IonInput, IonItem, IonLabel, IonSpinner, IonCard, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { FirestoreService } from '../common/services/firestore.service';
import { EventI } from '../common/services/events.models';
import { Observable } from 'rxjs';
import { setDefaultEventParameters } from '@angular/fire/analytics';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonItemOptions, IonAvatar,IonItemSliding,IonItemOption, IonIcon,IonSearchbar,IonToolbar, CommonModule, IonButtons,FormsModule, IonList, IonInput, IonItem, IonLabel, IonSpinner, IonCard, IonGrid, IonRow, IonCol, IonButton]
})
export class EventsPage implements OnInit {

  newUser: EventI;
  cargando: boolean=false;

  events: EventI[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
    this.initUser();
  }
  
 
  ngOnInit(){
  }

  // searchEvents() {
  //   // // Filtrar los eventos según el término de búsqueda en el campo title
  //   // this.filteredEvents = this.events.filter(event =>
  //   //   event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   // );
  // }

  

  deleteEvent(id: string) {
    this.firestoreService.deleteEvent(id)
      .then(() => {
        console.log('Event deleted:', id);
        this.events = this.events.filter(event => event.id !== id);
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  }

  edit(){}

  loadusers(){
    this.firestoreService.getCollectionChanges<EventI>('events').subscribe (cambios =>{
      if(cambios){
        this.events=cambios
      }
    })
  }

  initUser(){
    this.newUser={
      title:null,
      date: null,
      id:this.firestoreService.createIdDoc(),
    }
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
  
}
 
