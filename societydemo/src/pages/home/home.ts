
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{ AlertController } from 'ionic-angular';

// Angular Material
import {  MatToolbarModule, MatSidenavModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule } from '@angular/material';


import { LoginPage } from './../login/login';
import { CommitteelistPage } from './../committeelist/committeelist';
import { ElectricianlistPage } from './../electricianlist/electricianlist';
import { PlumberlistPage } from './../plumberlist/plumberlist';
import { DoctorlistPage } from './../doctorlist/doctorlist';
import { NewsPage } from './../news/news';
import { ProfilePage } from './../profile/profile';
import { SocietybillPage } from './../societybill/societybill';
import { EventlistPage } from './../eventlist/eventlist';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


username:any;
sessionUser:any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController ,public navParams : NavParams) {

    this.username = window.localStorage.getItem('username');
    this.sessionUser =sessionStorage.getItem("username");

  }
 logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
}
  shownews()
  {
    this.navCtrl.push(NewsPage);
  }

  showmembers()
  {
  this.navCtrl.push(EventlistPage);
  }
  ShowBills(){
    this.navCtrl.push(SocietybillPage);
  }

  showdoctorlist()
  {
    this.navCtrl.push(DoctorlistPage);
  }
  // showelectricianlist()
  // {
  //   this.navCtrl.push(electricianpage);
  // }

  showplumberlist()
  {
    this.navCtrl.push(PlumberlistPage);
  }

  showelectricianlist()
  {
    this.navCtrl.push(ElectricianlistPage);
  }

  ViewProfile(){
    this.navCtrl.push(ProfilePage);
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
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
