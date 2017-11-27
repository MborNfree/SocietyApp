import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the EmergencyListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency-list-admin',
  templateUrl: 'emergency-list-admin.html',
})
export class EmergencyListAdminPage {

  contacts=[];
  arrData = [];
 public items = [];
  shownGroup = null;
  diseases = [
    { title: "Mumbai Police", description: "Tel:+91 22 22620825",MobileNo:"Mob No:+91 78777445788",Fax:"Fax :+ 914565645"},
    { title: "Ambulance", description: "Tel:+011 3941676",MobileNo:"Mob No: +91 78777445788",Fax:"Fax:+91 225447" },
    { title: "Fire Brigade", description: "Tel:+011 3578771441", MobileNo:"Mob No:+91 78777445788", Fax:"Fax:+91 225447"},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private fdb: AngularFireDatabase) {
      this.fdb.list("/emerg_contact/").valueChanges().subscribe(_data => {
      this.contacts = _data;
     console.log(this.contacts);
    });

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

launchDialer(n:string){
  this.callNumber.callNumber(n, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyListAdminPage');
  }

}
