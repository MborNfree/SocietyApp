import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the EmergencycontactlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencycontactlist',
  templateUrl: 'emergencycontactlist.html',
})

export class EmergencycontactlistPage {
  email: any;

  contacts=[];
  arrData = [];
 public items = [];
  shownGroup = null;
  diseases = [
    { title: "Mumbai Police", description: "+91 22 22620825",MobileNo:"Mob No:+91 78777445788",Fax:"Fax :+ 914565645"},
    { title: "Ambulance", description: "Tel:+011 3941676",MobileNo:"Mob No: +91 78777445788",Fax:"Fax:+91 225447" },
    { title: "Fire Brigade", description: "Tel:+011 3578771441", MobileNo:"Mob No:+91 78777445788", Fax:"Fax:+91 225447"},
  ];


  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup ===  group;
};

  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer, private callNumber: CallNumber, private fdb: AngularFireDatabase) {
     this.fdb.list("/emerg_contact/").valueChanges().subscribe(_data => {
      this.contacts = _data;
     console.log(this.contacts);
    });
  }


  launchDialer(n:string){
        this.callNumber.callNumber(n, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
}


sendemail(emailid){
  this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
   //Now we know we can send
 }
});

alert(emailid);
let email = {
  to: emailid,
  cc: '',

  attachments: [
     'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg',
    'file://README.pdf'
  ],
  subject: 'Test Mail',
  body: 'This is Test mail',
  isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
// add alias
this.email.addAlias('gmail', 'com.google.android.gm');

// then use alias when sending email
this.email.open({
  app: 'gmail',
},);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencycontactlistPage');

  }

}
