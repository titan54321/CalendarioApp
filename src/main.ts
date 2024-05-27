import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"back-app-12759","appId":"1:413601181388:web:e4d2774144654cf1de5c69","storageBucket":"back-app-12759.appspot.com","apiKey":"AIzaSyBO3iJmYdH2oO4bE2oPuc-bFvsFDmp0pcM","authDomain":"back-app-12759.firebaseapp.com","messagingSenderId":"413601181388","measurementId":"G-FNRNP5MWJD"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), 
    provideFirebaseApp(() => initializeApp({"projectId":"back-app-12759","appId":"1:413601181388:web:e4d2774144654cf1de5c69","storageBucket":"back-app-12759.appspot.com","apiKey":"AIzaSyBO3iJmYdH2oO4bE2oPuc-bFvsFDmp0pcM","authDomain":"back-app-12759.firebaseapp.com","messagingSenderId":"413601181388","measurementId":"G-FNRNP5MWJD"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  
    ],
});