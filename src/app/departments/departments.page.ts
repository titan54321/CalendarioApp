import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonBackButton, IonButtons,IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { UserI } from '../common/services/users.models';
import { FirestoreService } from '../common/services/firestore.service';
import { FormsModule } from '@angular/forms';
const {v4: uuidv4} = require('uuid');

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons,IonList, IonInput, IonItem, IonLabel, IonSpinner, IonCard, IonGrid, IonRow, IonCol, IonButton]
})
export class DepartmentsPage implements OnInit {

  newUser: UserI;
  cargando: boolean=false;

  users: UserI[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
this.initUser();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadusers(){
    this.firestoreService.getCollectionChanges<UserI>('Users').subscribe (cambios =>{
      if(cambios){
        this.users=cambios
      }
    })
  }

  initUser(){
    this.newUser={
      name:null,
      controlNumber:null,
      department:null,
      email: null,
      id:this.firestoreService.createIdDoc(),
    }
  }

  async save(){
    this.cargando=true;
    await this.firestoreService.createDocumentID1(this.newUser)
      this.cargando=false;
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
