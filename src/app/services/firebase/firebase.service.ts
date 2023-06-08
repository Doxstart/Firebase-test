import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: 'AIzaSyAb8PLUFV0xA47xD8pjyCh2kaTJKya3TNA',
    authDomain: 'my-first-fb-project-6aac7.firebaseapp.com',
    projectId: 'my-first-fb-project-6aac7',
    storageBucket: 'my-first-fb-project-6aac7.appspot.com',
    messagingSenderId: '857354113593',
    appId: '1:857354113593:web:a0e8af3d2e285c5344f3e8',
  };

  app = initializeApp(this.firebaseConfig);



}
