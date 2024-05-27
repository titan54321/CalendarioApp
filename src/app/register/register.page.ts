import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { StudentI } from '../common/services/students.models';
import { FirestoreService } from '../common/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonSpinner, IonInput, IonGrid, IonRow, IonCol, IonButton, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  newUser: StudentI;
  cargando: boolean=false;

  users: StudentI[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
this.initUser();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadusers(){
    this.firestoreService.getCollectionChanges<StudentI>('students').subscribe (cambios =>{
      if(cambios){
        this.users=cambios
      }
    })
  }

  initUser(){
    this.newUser={
      password:null,
      controlNumber:null,
      email: null,
      id:this.firestoreService.createIdDoc(),
    }
  }

  // async save(){
  //   this.cargando=true;
  //   await this.firestoreService.createDocumentID2(this.newUser)
  //     this.cargando=false;
  // }

  async save() {
    this.cargando = true;

    // Verificar si el correo electrónico ya está en uso
    const existingUser = this.users.find(user => user.email === this.newUser.email);
    if (existingUser) {
      alert('El correo electrónico ya está registrado');
      this.cargando = false;
    } else {
      // El correo electrónico no está en uso, guardar el nuevo usuario
      await this.firestoreService.createDocumentID2(this.newUser);
      this.cargando = false;
    }
  }
 

}
