import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.page.html',
  styleUrls: ['./loginsucess.page.scss'],
})
export class LoginsucessPage implements OnInit {
  data:any;
  user: any;
  userReady: boolean = false;

  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  async ngOnInit() {
     const loading = await this.loadingController.create({
       message: 'Please wait...'
     });
     // await loading.present();
     this.nativeStorage.getItem('google_user')
    .then(data => {
      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      this.userReady = true;
    }, error =>{
      alert(error);
    });
    // alert('this.user' + JSON.stringify(this.user));
    await loading.onDidDismiss();
  }

  doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["home"]);
    }, err => {
      console.log(err);
    });
  }

}