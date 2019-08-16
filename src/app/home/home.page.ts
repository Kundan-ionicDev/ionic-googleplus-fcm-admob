import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';

import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userdata:any;
  constructor(
    private googlePlus: GooglePlus,
    public router:Router,
    public admob: AdMobFree,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController
    ) {
  }

  async doGoogleLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.googlePlus.login({
    })
      .then(async res => {
        await loading.onDidDismiss();
        this.nativeStorage.setItem('google_user', {
          name: res.displayName,
          email: res.email,
          picture: res.imageUrl
        })
        .then(() => {
           this.router.navigate(["loginsucess"]);
        }, (error) => {
          console.log(error);
        })
        loading.dismiss();
      })
      .catch(async err => {
        alert('Error'+ JSON.stringify(err));
        const { role, data } = await loading.onDidDismiss();
      });
  }

  showAdBanner() {
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        // id: 'kd-app-pub-211234353389/7857878153'
    };

    this.admob.banner.config(bannerConfig);
    this.admob.banner.prepare().then(() => {
        // success
    }).catch(e => console.log(e));

}

   showInterstitial() {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        // id: 'ca-app-pub-234242/7857878153'
    };

    this.admob.interstitial.config(interstitialConfig);

    this.admob.interstitial.prepare().then(() => {
        // success
    });

}
}
