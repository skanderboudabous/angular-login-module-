import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "YOUR-FIREBASE-API-KEY",
      authDomain: "YOUR-FIREBASE-DOMAIN-NAME"
    });
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
