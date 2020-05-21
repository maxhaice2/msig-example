import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { auth } from 'firebase';
import { LoginPage } from '../login/login.page';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import {Input} from '@angular/core'
import * as firebase from 'firebase'
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public recaptchaVerifier;
  public otpSent: boolean = false;

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit() {  
    try{
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
      {'size': 'invisible'});
    }
    catch{
      
    }
  }

  public isLoggedIn() : boolean{
    return this.authService.isLoggedIn;
  }
  
}
