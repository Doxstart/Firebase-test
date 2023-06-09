import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  dbUser: any;

  constructor(private firestore: FirestoreService, private auth: AuthService){
    this.auth.userSubject.subscribe({
      next: user => {
        if (user) {
          this.firestore.getUser(user.uid).then(dbUser => this.dbUser = dbUser);
        }
      }
    })
  }

}
