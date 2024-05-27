import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { connectFirestoreEmulator } from 'firebase/firestore';
// Replace with your actual Firebase project configuration
const firebaseConfig = {
  production: false,
        apiKey: "AIzaSyBO3iJmYdH2oO4bE2oPuc-bFvsFDmp0pcM",
        authDomain: "back-app-12759.firebaseapp.com",
        projectId: "back-app-12759",
        storageBucket: "back-app-12759.appspot.com",
        messagingSenderId: "413601181388",
        appId: "1:413601181388:web:e4d2774144654cf1de5c69",
        measurementId: "G-FNRNP5MWJD"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  private auth;
  private firestore;

  constructor() {
  this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);

    if (!window.location.origin.includes('localhost')) return;
    connectAuthEmulator(this.auth, 'http://localhost:9099');
    connectFirestoreEmulator(this.firestore, 'localhost', 8080);
  }

  // Login with email and password
  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Logout current user
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Add a new document to a collection (replace 'collectionName' with your actual collection name)
  async addDocument(collectionName: string, data: any): Promise<void> {
    try {
      const collectionRef = collection(this.firestore, collectionName);
      const docRef = await addDoc(collectionRef, data);
      console.log('Document added with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Get all documents from a collection (replace 'collectionName' with your actual collection name)
  async getDocuments(collectionName: string): Promise<any[]> {
    try {
      const collectionRef = collection(this.firestore, 'events');
      const querySnapshot = await getDocs(collectionRef);
      const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return documents;
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Delete a document by ID (replace 'collectionName' and 'documentId' with your actual values)
  async deleteDocument(collectionName: string, documentId: string): Promise<void> {
    try {
      const docRef = doc(this.firestore, collectionName, documentId);
      await deleteDoc(docRef);
      console.log('Document deleted with ID:', documentId);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  // Update a document by ID (replace 'collectionName', 'documentId', and 'data' with your actual values)
  async updateDocument(collectionName: string, documentId: string, data: any): Promise<void> {
    try {
      const docRef = doc(this.firestore, collectionName, documentId);
      await updateDoc(docRef, data);
      console.log('Document updated with ID:', documentId);
    } catch (error) {
      console.error('Error updating document:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }
}
