import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonCardHeader, IonContent, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonDatetime} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
const {v4: uuidv4} = require('uuid');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonItem, IonLabel, IonIcon, CommonModule, IonSpinner, FormsModule, IonCard, IonInput, IonGrid, IonRow, IonDatetime, IonCol, IonButton, IonButtons],
})
export class HomePage implements OnInit{

  
  constructor() {
   
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
