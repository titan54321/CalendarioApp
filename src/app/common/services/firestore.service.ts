import { Injectable, inject } from '@angular/core';
import { Firestore, collection,collectionData, setDoc, doc, getDocs, QueryConstraint, query, deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
const {v4: uuidv4 } = require('uuid');
import { EventI } from './events.models';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

firestore : Firestore = inject(Firestore);
  constructor() {
   }

   // Obtiene los cambios en una colección de Firestore.
  // getCollectionChanges2<T>(path: string): Observable<T[]> {
  //   const refCollection: AngularFirestoreCollection<T> = this.firestore.collection<T>(path); // Obtiene la colección de Firestore
  //   return refCollection.valueChanges(); // Devuelve los cambios en la colección
  // }

  getCollectionChanges<tipo>(path: string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }
  getCollectionChanges1<tipo>(path: string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }
  createDocument(data: any, enlace:string){
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  }

  createDocumentID(data: any, enlace:string, idDoc:string){
const document = doc(this.firestore,'events/${idDoc}');
return setDoc(document, data)
  }

  createDocumentID1(data: any){
    const document = doc(this.firestore,'events', this.createIdDoc());
    return setDoc(document, data)
      }

      createDocumentID2(data: any){
        const document = doc(this.firestore,'students', this.createIdDoc());
        return setDoc(document, data)
          }

  createIdDoc(){
    return uuidv4();
  }
  
  deleteEvent(id: string) {
    const eventDoc = doc(this.firestore, 'events', id);
    return deleteDoc(eventDoc);
  }

 
//  // Obtiene todas las tareas del usuario actual para una fecha específica.
//   getAllTasksByDate(date: string): Observable<EventI[]> {
//     return this.getCollectionFilterChanges<EventI>('events', ref => // Devuelve un Observable que obtiene todos los cambios en la colección de tareas filtrados por el ID del usuario actual y la fecha proporcionada
//       // ref.where('idUser', '==', this.user.user?.idUser) // Filtra las tareas por el ID del usuario actual
//         ref.where('date', '==', date) // Filtra las tareas por la fecha proporcionada
//     );
//   }
  
//   // Obtiene los cambios en una colección de Firestore aplicando una consulta (si se proporciona).
//   getCollectionFilterChanges<T>(path: string, queryFn?: QueryFn): Observable<T[]> {
//     return this.firestore.collection<T>(path, queryFn).valueChanges(); // Devuelve los cambios en la colección filtrados según la consulta
//   }

}
