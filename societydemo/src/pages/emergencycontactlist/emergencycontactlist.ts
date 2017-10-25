import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  shownGroup = null;
  diseases = [
    { title: "Mumbai Police", description: "Tel:+91 22 22620825",MobileNo:"Mob No:+91 78777445788",Fax:"Fax :+ 914565645"},
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
    return this.shownGroup === group;
};

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencycontactlistPage'); 

  }
}
