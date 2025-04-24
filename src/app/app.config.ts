import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
  
      
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-7490e","appId":"1:242769824570:web:22d8e78ed1b2d5b9f3de03","storageBucket":"friendlychat-7490e.firebasestorage.app","apiKey":"AIzaSyBOWgY_nceuI5YGH_81myjF2Cb47b0tk20","authDomain":"friendlychat-7490e.firebaseapp.com","messagingSenderId":"242769824570"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
