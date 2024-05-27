import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,IonList, IonSearchbar, IonInput, IonItem, IonLabel, IonSpinner, IonCard, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { FirestoreService } from '../common/services/firestore.service';
import { EventI } from '../common/services/events.models';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-copy-events',
  templateUrl: './copy-events.page.html',
  styleUrls: ['./copy-events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonSearchbar,IonToolbar, CommonModule, IonButtons,FormsModule, IonList, IonInput, IonItem, IonLabel, IonSpinner, IonCard, IonGrid, IonRow, IonCol, IonButton]
})
export class CopyEventsPage implements OnInit {

  newUser: EventI;
  cargando: boolean=false;
date: string="";
  events: EventI[] = [];

  constructor(private firestoreService: FirestoreService,
    private route: ActivatedRoute) {
    this.loadusers();
    this.initUser();
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.date = params["date"];

    //   this.firestoreService.getAllTasksByDate(this.date).subscribe(events => {
    //     if (events) {
    //       this.events = events;
    //     }
    //   })
    // });
  }

  // searchEvents() {
  //   // // Filtrar los eventos según el término de búsqueda en el campo title
  //   // this.filteredEvents = this.events.filter(event =>
  //   //   event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   // );
  // }

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
 


