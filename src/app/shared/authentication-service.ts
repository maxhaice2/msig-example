import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "./user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static authorized: boolean = false;
  confirmationResult: firebase.auth.ConfirmationResult;
  public otpSent = false;
  phoneNumber;
  userData:any

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone,
    private roter: Router
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    try{
      return (user.phoneNumber !== null) ? true : false;
    }
    catch{
      return false;
    }
  }


  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      phone: user.phone
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign-out 
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

   
  
  sendOTP(recaptchaVerifier){
    var pNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    this.ngFireAuth.signInWithPhoneNumber(pNumber, recaptchaVerifier).
    then((result)=>
    {
    this.otpSent = true;
    this.phoneNumber = pNumber;
    this.confirmationResult = result;
    alert("Смс отправлено");
  }).catch(err=>{
    alert("Ошибка");
    console.log(err);
  })
};
  verifyOTP(){
    var otp = (<HTMLInputElement>document.getElementById("otp")).value;
    this.confirmationResult.confirm(otp).then(()=>
    {
      this.router.navigate(['/main']);
    }).catch(err=> {
      alert("Не верный код");
    })
  }

}