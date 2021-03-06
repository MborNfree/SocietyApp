import { ThreadsPage } from './../threads/threads';
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  IonicPage,
  ToastController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { SMS } from "@ionic-native/sms";
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

// Angular Material
import firebase from 'firebase';
import { LoginPage } from "./../login/login";
import { Camera } from '@ionic-native/camera';
import { ElectricianlistPage } from "./../electricianlist/electricianlist";
import { PlumberlistPage } from "./../plumberlist/plumberlist";
import { DoctorlistPage } from "./../doctorlist/doctorlist";
import { NewsPage } from "./../news/news";
import { ProfilePage } from "./../profile/profile";
import { SocietybillPage } from "./../societybill/societybill";
import { EventlistPage } from "./../eventlist/eventlist";
import { HelpdeskPage } from "./../helpdesk/helpdesk";
import { Http } from "@angular/http";

declare const jQuery: any;


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
  public xmlItems: any;

  constructor(
    public toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private sms: SMS,
    private http: Http,

  ) {
    this.username = window.sessionStorage.getItem("Sessioneml");
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

  ionViewWillEnter() {
    this.loadXML();
  }

  loadXML() {
    this.http.get('/assets/data/comics.xml')
      .map(res => res.text())
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
            console.log(this.xmlItems);
          });
      });
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err, result) {
        var obj = result.comics;
        for (k in obj.publication) {
          var item = obj.publication[k];
          arr.push({
            id: item.id[0],
            title: item.title[0],
            publisher: item.publisher[0],
            genre: item.genre[0]
          });
        }

        resolve(arr);
      });
    });
  }
  logout() {
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("Sessionuid");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

  shownews() {
    this.navCtrl.push(NewsPage);
  }

  showEvents() {
    this.navCtrl.push(EventlistPage);
  }
  ShowBills() {
    this.navCtrl.push(SocietybillPage);
  }

  ShowForum() {
    this.navCtrl.push(ThreadsPage);
  }

  showdoctorlist() {
    this.navCtrl.push(DoctorlistPage);
  }

  showplumberlist() {
    this.navCtrl.push(PlumberlistPage);
  }


  showelectricianlist() {
    this.navCtrl.push(ElectricianlistPage);
  }

  ViewProfile() {
    this.navCtrl.push(ProfilePage);
  }


  sendTextMessage() {
    alert('Do u wanted to send panic message?');
    var request = new XMLHttpRequest();
    request.open("POST", "https://control.msg91.com", true);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://api.msg91.com/api/v2/sendsms",
      "method": "POST",
      "headers": {
        "authkey": "190301AU2RL0SzSK5a460060",
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{ \"sender\": \"SOCKET\", \"route\": \"4\", \"country\": \"91\", \"sms\": [ { \"message\": \"Panic Alert from flat no 104\", \"to\": [ \"8401081227\", \"9819347279\" ] }, { \"message\": \"Panic Alert from flat no 104\", \"to\": [ \"8080328322\", \"8355891739\" ] } ] }"
      //"data" : 'asstes/data/users.json'
    }

    jQuery.ajax(settings).done(function (response) {
      console.log(response);
      //alert("sms response =" + response)

      alert("Sms Sent!");
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
