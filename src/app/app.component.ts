import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  imgParent = '';
  showImg = true;


  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD1RHaQoe2vJx2bfrciyy9YQIsPuxQysI4",
      authDomain: "template-store-e0495.firebaseapp.com",
    })
  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
