Ionic Starter for Google Plus Authentication, FCM notification and Admob Integration 


This repo is an Ionic v4 app to help you understand, how to add Google Plus Log In , FCM Notification and Admob pro to your Ionic App.

For this Ionic example app we are going to build a simple ionic 4 app that allows users to log in using their Google account. Once they log in, they will see a home page with their basic profile info.


1) Google Plus Authentication

    Note: This code is for Ionic v4.

    Installation of this app

    iOS

    To get your iOS REVERSED_CLIENT_ID, generate a configuration file here. This GoogleService-Info.plist file contains the REVERSED_CLIENT_ID you'll need during installation. This value is only needed for iOS.

    The REVERSED_CLIENT_ID is also known as the "iOS URL Scheme" on the Developer's Console.

    Login on iOS takes the user to a SafariViewController through the Google SDK, instead of the separate Safari browser.

    Android

    To configure Android, generate a configuration file here. Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console. There is no need to add the generated google-services.json file into your cordova project.

    Make sure you execute the keytool steps as explained here or authentication will fail (do this for both release and debug keystores).

    IMPORTANT:

    The step above, about keytool, show 2 types of certificate fingerprints, the Release and the Debug, when generating the configuration file, it's better to use the Debug certificate fingerprint, after that, you have to go on Google Credentials Manager, and manually create a credential for OAuth2 client with your Release certificate fingerprint. This is necessary to your application work on both Development and Production releases.
    Ensure that you are using the correct alias name while generating the fingerprint.
    $ keytool -exportcert -keystore <path-to-debug-or-production-keystore> -list -v -alias <alias-name>
    Login on Android will use the accounts signed in on the user's device.

    Integrating Google Play Services

    To set up Google Play Services version, you can use PLAY_SERVICES_VERSION parameter (with 11.8.0 value by default). It is useful in order to avoid conflicts with another plugins which use any other different version of Google Play Service, because they MUST be the same version.

    Publishing your app in Google Play Store

    Google re-signs your app with a different certificate when you publish it in the Play Store. Once your app is published, copy the SHA-1 fingerprint of the "App signing certificate", found in the "App signing" section under "Release Management", in Google Play Console. Paste this fingerprint in the Release OAuth client ID in Google Credentials Manager.

    Web Client Id

    If you want to get an idToken or serverAuthCode back from the Sign In Process, you will need to pass the client ID for your project's web application. This can be found on your project's API credentials page on the Google Developer's Console.

    Install node dependencies

    $ npm install



    Using the Cordova CLI and npm:

    $ cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid --variable WEB_APPLICATION_CLIENT_ID=mywebapplicationclientid
    $ cordova prepare
    Using the Cordova CLI to fetch the latest version from GitHub:


    $ cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid  --variable WEB_APPLICATION_CLIENT_ID=mywebapplicationclientid
    $ cordova prepare
    Ionic cordova plugin add cordova-plugin-googleplus

    Running the app

    To run the app on your browser

    $ ionic serve

    To run the app on iOS

    Follow the steps from https://beta.ionicframework.com/docs/building/ios

    $ ionic cordova prepare ios

    To run the app on Android

    Follow the steps from https://beta.ionicframework.com/docs/building/android

    $ ionic cordova prepare android $ ionic cordova run android





2) ionic-admob-demo

    A demo ionic app with Google AdMob Advertisements integrated.

    Getting Started

    Download as zip or clone the project using:
    git clone https://github.com/MoAsmar/ionic-admob-demo.git
    cd to your project and run npm install .
    Run the following commands to install the AdMob Free plugin:
    cordova plugin add cordova-plugin-admob-free --save 
    cordova plugin add cordova-admob-sdk
    npm install @ionic-native/admob-free --save
    add the platform for the app to run on your device: ionic cordova platform add android for android devices. Use ionic cordova platform add ios for ios devices.
    Prerequisites

    -Ionic version 3.1.0.

    -cordova (built with version 8.0.0).

    Installing

    connect your device and run the command:

    ionic cordova run android
    then the app will start you will see two buttons.

    Show Banner will popup the banner:

  

    Show Interstitial will show the full screen interstital:



    Prepare for production

    set property isTesting to false and copy the banner Ad Unit ID from your admob and past it under id property as below example:

     showBanner() {

          let bannerConfig: AdMobFreeBannerConfig = {
              isTesting: false, // Remove in production
              autoShow: true,
              id: 'ca-app-pub-wwwwwwwww'
          };

          this.admob.banner.config(bannerConfig);

          this.admob.banner.prepare().then(() => {
              // success
          }).catch(e => console.log(e));

      }
    note: for interstital ads do the same but copy the interstitial id from admob and add it under launchInterstitial() method.



    for more options and settings, check the admob free plugin documentation



3) Google Firebase Cloud Messaging Cordova Push Plugin
     Make sure you have ‘google-services.json’ for Android or ‘GoogleService-Info.plist’ for iOS in your Cordova project root folder. You don´t need to configure anything else in order to have push notification working for both platforms, everything is magic.

      cordova plugin add cordova-plugin-fcm
      Firebase configuration files

      Get the needed configuration files for Android or iOS from the Firebase Console (see docs: https://firebase.google.com/docs/).

      Usage

      ⚠️ It's highly recommended to use REST API to send push notifications because Firebase console does not have all the functionalities. Pay attention to the payload example in order to use the plugin properly.
      You can also test your notifications with the free testing server: https://cordova-plugin-fcm.appspot.com

      Receiving Token Refresh

      //FCMPlugin.onTokenRefresh( onTokenRefreshCallback(token) );
      //Note that this callback will be fired everytime a new token is generated, including the first time.
      FCMPlugin.onTokenRefresh(function(token){
          alert( token );
      });
      Get token

      //FCMPlugin.getToken( successCallback(token), errorCallback(err) );
      //Keep in mind the function will return null if the token has not been established yet.
      FCMPlugin.getToken(function(token){
          alert(token);
      });
      Subscribe to topic

      //FCMPlugin.subscribeToTopic( topic, successCallback(msg), errorCallback(err) );
      //All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
      //Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
      FCMPlugin.subscribeToTopic('topicExample');
      Unsubscribe from topic

      //FCMPlugin.unsubscribeFromTopic( topic, successCallback(msg), errorCallback(err) );
      FCMPlugin.unsubscribeFromTopic('topicExample');
      Receiving push notification data

      //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
      //Here you define your application behaviour based on the notification data.
      FCMPlugin.onNotification(function(data){
          if(data.wasTapped){
            //Notification was received on device tray and tapped by the user.
            alert( JSON.stringify(data) );
          }else{
            //Notification was received in foreground. Maybe the user needs to be notified.
            alert( JSON.stringify(data) );
          }
      });
      Send notification. Payload example (REST API)

      Full documentation: https://firebase.google.com/docs/cloud-messaging/http-server-ref
      Free testing server: https://cordova-plugin-fcm.appspot.com

      //POST: https://fcm.googleapis.com/fcm/send
      //HEADER: Content-Type: application/json
      //HEADER: Authorization: key=AIzaSy*******************
      {
        "notification":{
          "title":"Notification title",
          "body":"Notification body",
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"fcm_push_icon"
        },
        "data":{
          "param1":"value1",
          "param2":"value2"
        },
          "to":"/topics/topicExample",
          "priority":"high",
          "restricted_package_name":""
      }
     
