import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.fcm.getToken().then(token => {
        console.log('FCM Token ID ::' + token);
        // alert('FCM Token ::'+token);
      });

      this.nativeStorage.getItem('google_user')
      .then( data => {
        //user is previously logged and we have his data
        //we will let him access the app
        this.router.navigate(["/home"]);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate(["/home"]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }
}
