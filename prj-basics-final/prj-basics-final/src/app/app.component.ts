import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadfeature = 'recipe';
  onNavigate(feature: string) {
    this.loadfeature = feature;
    console.log(this.loadfeature);
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBc7uI6UUlQVOVPTz9Be1qPTjCy9Qg0rZ0',
      authDomain: 'ng-recipe-book-c33b9.firebaseapp.com',
    });
  }
}
