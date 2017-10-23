import { LoginPage } from './../login/login';
import { CommitteelistPage } from './../committeelist/committeelist';
import { ElectricianlistPage } from './../electricianlist/electricianlist';
import { PlumberlistPage } from './../plumberlist/plumberlist';
import { DoctorlistPage } from './../doctorlist/doctorlist';
import { NewsPage } from './../news/news';


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

  shownews()
  {
    this.navCtrl.push(NewsPage);
  }

  showmembers()
  {
  this.navCtrl.push(CommitteelistPage);
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
