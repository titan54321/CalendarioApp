import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonApp,IonTitle, IonCard, IonToolbar, IonSpinner,IonNav,IonButton, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';
import 'firebase/auth';
import 'firebase/firestore';
import { ReactiveFormsModule } from '@angular/forms'; 
import { StudentI } from '../common/services/students.models';
import { FirestoreService } from '../common/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonApp,ReactiveFormsModule,IonTitle, IonCard, IonSpinner, IonNav ,IonToolbar,CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonInput]
})

export class LoginPage implements OnInit {
 
  email: string = '';
  password: string = '';
  cargando: boolean = false;
  users: StudentI[] = [];

  constructor(private firestoreService: FirestoreService, private router: Router) {
    this.loadUsers();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadUsers() {
    this.firestoreService.getCollectionChanges<StudentI>('students').subscribe(cambios => {
      if (cambios) {
        this.users = cambios;
      }
    });
  }

  async login() {
    this.cargando = true;
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // const userId = 'studentId'; // Reemplaza 'studentId' con el ID del estudiante después del inicio de sesión

      // // Redirigir al perfil del estudiante pasando el userId como parámetro
      // this.router.navigate(['/profile', userId]);
      window.location.href = '/home';
      console.log('Inicio de sesión exitoso');
      alert('Bienvenido');
    } else {
      // Usuario no encontrado o contraseña incorrecta
      alert('Correo electrónico o contraseña incorrectos');
    }

    this.cargando = false;
  }
  
}
