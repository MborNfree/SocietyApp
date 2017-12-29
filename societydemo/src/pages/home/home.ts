import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  IonicPage,
  ToastController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { SMS } from '@ionic-native/sms';
// Angular Material

import { LoginPage } from "./../login/login";

import { ElectricianlistPage } from "./../electricianlist/electricianlist";
import { PlumberlistPage } from "./../plumberlist/plumberlist";
import { DoctorlistPage } from "./../doctorlist/doctorlist";
import { NewsPage } from "./../news/news";
import { ProfilePage } from "./../profile/profile";
import { SocietybillPage } from "./../societybill/societybill";
import { EventlistPage } from "./../eventlist/eventlist";
import { Card } from "../card/card";
import { HelpdeskPage } from "./../helpdesk/helpdesk";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  array1: any[];
  username: any;
  sessionUser: any;
  public uIDParam;

  constructor(
    public toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private sms: SMS
  ) {
    this.username = window.localStorage.getItem("Sessioneml");
    this.sessionUser = sessionStorage.getItem("Sessionuid");
    this.uIDParam = navParams.get("uid");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toastCtrl
          .create({
            message: `Welcome,${data.email}`,
            duration: 3000
          })
          .present();
      } else {
        this.toastCtrl
          .create({
            message: `Could not found user`,
            duration: 3000
          })
          .present();
      }
    });
  }
  logout() {
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("Sessionuid");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

  carddetails() {
    this.navCtrl.push(Card);
  }
  shownews() {
    this.navCtrl.push(NewsPage);
  }

  showmembers() {
    this.navCtrl.push(EventlistPage);
  }
  ShowBills() {
    this.navCtrl.push(SocietybillPage);
  }

  ShowHelpDesk() {
    this.navCtrl.push(HelpdeskPage);
  }

  showdoctorlist() {
    this.navCtrl.push(DoctorlistPage);
  }

  // showelectricianlist()
  // {
  //   this.navCtrl.push(electricianpage);
  // }

  showplumberlist() {
    this.navCtrl.push(PlumberlistPage);
  }

  showelectricianlist() {
    this.navCtrl.push(ElectricianlistPage);
  }

  ViewProfile() {
    this.navCtrl.push(ProfilePage);
  }


  // for sending sms to multiple numbers
  sendTextMessage() {
    this.array1=["+917507526151","+919664993545","+919987566826","+918655156422"];
    //alert(this.array1);
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
          //intent: 'INTENT' // send SMS inside a default SMS app
      }
    }

    this.sms.send(this.array1.toString(),'Hii Users',options).then((result) => {
      alert(result);
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      alert(error);
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }




  showAlert() {
    let confirm = this.alertCtrl.create({
      title: "Exit Application?",
      message: "Click Yes to Exit !",
      buttons: [
        {
          text: "NO"
          // handler: () => {
          //   console.log('No clicked');
          // }
        },
        {
          text: "YES",
          handler: () => {
            console.log("YES clicked");
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
