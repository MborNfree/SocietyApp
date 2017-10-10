import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController ) {

  }


  login()
  {
    this.navCtrl.push(LoginPage);
  }

  
  showAlert()
  {
    let confirm = this.alertCtrl.create({
      title: 'Exit Application?',
      message: 'Click Yes to Exit !',
      buttons: [
        {
          text: 'NO',
          // handler: () => {
          //   console.log('No clicked');
          // }
        },
        {
          text: 'YES',
          handler: () => {
            console.log('YES clicked');
            
          }
        }
      ]
    });
    confirm.present();
  }
}
