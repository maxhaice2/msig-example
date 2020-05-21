import { Component, OnInit, Output } from '@angular/core';
import { User } from '../shared/user';
import { Router, ActivatedRoute, NavigationCancel, NavigationEnd } from "@angular/router";
import * as firebase from 'firebase'
import { Injectable, NgZone } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Input} from '@angular/core';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public recaptchaVerifier;
  public otpSent: boolean = false;


  
  constructor(public authService: AuthenticationService,
    private router: Router) {
      router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((val) => {
       // alert("login page");
        authService.otpSent = false;
      });
    }

  ngOnInit() {  
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
    {'size': 'invisible'});
  }

  public verifyOTP(){
    this.authService.verifyOTP();
  }

  public sendOTP(){
    this.authService.sendOTP(this.recaptchaVerifier);
    this.otpSent = this.authService.otpSent;
  }


}