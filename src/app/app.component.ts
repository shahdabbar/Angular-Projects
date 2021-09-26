import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDsajwLjih7ek96N5TC0CkUFqKyrKtiEhI',
      authDomain: 'ng-recipes-b144c.firebaseapp.com',
      projectId: 'ng-recipes-b144c',
      storageBucket: 'ng-recipes-b144c.appspot.com',
      messagingSenderId: '991770015636',
      appId: '1:991770015636:web:15063d6a7fe318cf848181',
      measurementId: 'G-H9Q4TV9ES0',
    };
    initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  }
}
