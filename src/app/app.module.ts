import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AuthenticationService } from './shared/authentication-service';
import { MainPageModule } from './main/main.module';
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
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  LoginPageModule,
  HttpClientModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  AngularFirestoreModule,
MainPageModule],
  providers: [
    AuthenticationService,
    WebView,
    File,
    Camera,
    FilePath,
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
