import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { EventI } from '../common/services/events.models';
import { FirestoreService } from '../common/services/firestore.service';
const {v4: uuidv4} = require('uuid');

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton]
})
export class AddEventPage implements OnInit {

  newUser: EventI;
  cargando: boolean=false;

  users: EventI[] = [];

  constructor(private firestoreService: FirestoreService) {

this.initUser();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  initUser(){
    this.newUser={
      title:null,
      date:null,
      id:this.firestoreService.createIdDoc(),
    }
  }

  async save(){
    this.cargando=true;
    await this.firestoreService.createDocumentID1(this.newUser)
      this.cargando=false;
  }

  navigateToCalendar() {
    window.location.href = '/calendar'; // Replace with your page path
  }
  
}
