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
import { Card } from "../card/card";
import { HelpdeskPage } from "./../helpdesk/helpdesk";
import { Http } from "@angular/http";
declare const jQuery : any;


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
  public xmlItems : any;



  constructor(
    public toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,

    private sms: SMS,
    private http:Http,


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

  ionViewWillEnter()
  {
     this.loadXML();
  }

  loadXML()
  {
     this.http.get('/assets/data/comics.xml')
     .map(res => res.text())
     .subscribe((data)=>
     {
        this.parseXML(data)
        .then((data)=>
        {
           this.xmlItems = data;
           console.log(this.xmlItems);
        });
     });
  }


  parseXML(data)
  {
     return new Promise(resolve =>
     {
        var k,
            arr    = [],
            parser = new xml2js.Parser(
            {
               trim: true,
               explicitArray: true
            });

        parser.parseString(data, function (err, result)
        {
           var obj = result.comics;
           for(k in obj.publication)
           {
              var item = obj.publication[k];
              arr.push({
                 id           : item.id[0],
                 title        : item.title[0],
                 publisher : item.publisher[0],
                 genre        : item.genre[0]
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


  //for sending sms to multiple numbers
  // sendTextMessage() {
  //   this.array1=[+917507526151,+919664993545,+919987566826,+918655156422];

  //   //alert(this.array1);
  //   this.sms.send('array1','Hii Users').then((result) => {
  //    // alert(result);
  //     let successToast = this.toastCtrl.create({
  //       message: "Text message sent successfully",
  //       duration: 3000
  //     })
  //     successToast.present();
  //   }, (error) => {
  //     alert(error);
  //     let errorToast = this.toastCtrl.create({
  //       message: "Text message not sent. :(",
  //       duration: 3000
  //     })
  //     errorToast.present();
  //   });

  // }

  // sendTextMessage() {
  //   var request = new XMLHttpRequest();
  //   request.open("POST", "https://control.msg91.com", true);
  //   request.setRequestHeader("Access-Control-Allow-Origin", "*");

  //   var settings = {
  //     async: true,
  //     crossDomain: true,
  //     url: "https://control.msg91.com/api/postsms.php",
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/xml"
  //     },
  //    // data: "<MESSAGE><AUTHKEY>190301AU2RL0SzSK5a460060</AUTHKEY><SENDER>vishwa</SENDER><ROUTE>Template</ROUTE><CAMPAIGN>XML API</CAMPAIGN> <COUNTRY>91</COUNTRY><SMS TEXT='test message1'><ADDRESS TO='8401081227'></ADDRESS><ADDRESS TO='7507526151'></ADDRESS></SMS><SMS TEXT='hi test message'><ADDRESS TO='8080328322'></ADDRESS><ADDRESS TO='8355891739'></ADDRESS></SMS></MESSAGE>"
  //     data: this.xmlItems
  //   };

  //   $.ajax(settings).done(function(response) {
  //     console.log(response.data);
  //     alert(response.data);
  //     console.log("sms response" + response);
  //     //alert("sms response =" + response)
  //     if(response){
  //       alert("Sms Sent");
  //     }else{
  //       alert("Error Occured");
  //     }

  //   });
  // }

  sendTextMessage() {
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
      "data": "{ \"sender\": \"SOCKET\", \"route\": \"4\", \"country\": \"91\", \"sms\": [ { \"message\": \"Hello User testing Message1 from society App\", \"to\": [ \"8401081227\", \"9819347279\" ] }, { \"message\": \"Message2 from society app\", \"to\": [ \"8080328322\", \"8355891739\" ] } ] }"
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
