##Ionic Starter for Google Plus Authentication, FCM notification and Admob Integration

This repo is an Ionic v4 app to help you understand, how to add Google Plus Log In , FCM Notification and Admob pro to your Ionic App.

For this Ionic example app we are going to build a simple ionic 4 app that allows users to log in using their Google account. Once they log in, they will see a home page with their basic profile info.

Ionic Starter for Google Plus Authentication, FCM notification and Admob Integration.

#### Download as zip or clone the project using:<br />
https://github.com/Kundan-ionicDev/ionic-googleplus-fcm-admob.git

#### cd to your project and run 
 >npm install

For AdMobRun the following commands to install the AdMob Free, Google plus and FCM plugin:
##### For AdMob add below mentioned plugin
>cordova plugin add cordova-plugin-admob-free --save cordova plugin add cordova-admob-sdk

>npm install @ionic-native/admob-free --save

##### For Google Plus  add below mentioned plugin
>ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid --variable WEB_APPLICATION_CLIENT_ID=mywebapplicationclientid 

>npm install @ionic-native/google-plus

##### For FCM add below mentioned plugin
>ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated 

>npm install @ionic-native/fcm

<br/>
>Imports : import { FCM } from '@ionic-native/fcm/ngx';

##### Add the platform for the app to run on your device: 
>ionic cordova platform add android 
>ionic cordova platform add ios

##### connect your device and run the command: 
>ionic cordova run android 
>ionic cordova run ios

##### Add below mentioned code for Admob
>    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true,
        autoShow: true
    };

 >   this.admob.banner.config(bannerConfig);
    this.admob.banner.prepare().then(() => {
       console.log('sucess');
    }).catch(e => console.log(e));
}

>showInterstitial() {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true, 
        autoShow: true
    };

 >   this.admob.interstitial.config(interstitialConfig);

>    this.admob.interstitial.prepare().then(() => {
   console.log('sucess');
    });'
>}

<br/>

#### Import below mentioned into page and app.module.ts 
>import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

###### There is also a detailed tutorial to help you with the [Google Account setup](https://console.developers.google.com/apis/dashboard?project=realhero-1345&angularJsUrl= "Google Account setup") and with the step by step of building this Ionic Framework app.

#### Add below mentioned code for Login button click :

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

#### Add below mentioned code for Logout of Google

    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["home"]);
    }, err => {
      console.log(err);
    });
  }
#### Add into construction 
>private googlePlus: GooglePlus 
>and 
>import below mentioned into page and app module.

>import { GooglePlus } from '@ionic-native/google-plus/ngx';

#### For FCM import below mentioned in page and app.module
>import { FCM } from '@ionic-native/fcm/ngx';

#### Add below mentioned code to get fcm token into app.component.ts inside

>initializeApp() 
{ 
this.platform.ready().then(() => 
{ 
this.fcm.getToken().then(token => 
{ 
console.log('FCM Token ID ::' + token);
// alert('FCM Token ::'+token); 
}); 
};
                    

###End
