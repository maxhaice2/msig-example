import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router'
import * as firebase from 'firebase/app';
import { AuthenticationService } from './shared/authentication-service';

const firebaseConfig = {
  apiKey: "AIzaSyAyfjKUPLzCS2UP9vzdwCMOm4K5nKOFwvA",
  authDomain: "trueprint-9ff0e.firebaseapp.com",
  databaseURL: "https://trueprint-9ff0e.firebaseio.com",
  projectId: "trueprint-9ff0e",
  storageBucket: "trueprint-9ff0e.appspot.com",
  messagingSenderId: "243297725224",
  appId: "1:243297725224:web:28a14b335d15401d607e1d",
  measurementId: "G-GV3X6TMK23"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public recaptchaVerifier;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public service: AuthenticationService,
    private router: Router
  ) {
    // firebase.initializeApp(firebaseConfig);
    // this.initializeApp();
    //
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {  
    if(this.service.isLoggedIn){
      this.router.navigate(['main']);
    }
  }

}
