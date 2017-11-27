import { EmergencyListAdminPage } from './../emergency-list-admin/emergency-list-admin';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-addemergency-admin',
  templateUrl: 'addemergency-admin.html',
})
export class AddemergencyAdminPage {

  emergencies: AngularFireList<any>;
  authForm: FormGroup;

  // emergencyemail:any;
  // emergencynm:string;
  // emergencynum:string;
  // emergencyweb:string;
  // title: string;
  // description: string;

  @ViewChild('emergType') emergType;
  @ViewChild('enum') emergency_number;
  @ViewChild('eweb') emergency_web;
  @ViewChild('email') emergency_email;

   public items: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/emergency_category/');

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public fdb: AngularFireDatabase,
              public fire: AngularFireAuth) {

     this.emergencies = fdb.list('/emerg_contact');
    this.authForm = formBuilder.group({
      emergencynum: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(3), Validators.maxLength(30)])],
      emergencyType: ['', Validators.compose([Validators.required])],
      emergencyweb: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      emergencyemail: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])],
     });
  }

   alert(message: string) {
    this.alertCtrl.create({
      title: 'Emergency Contact Added Successfully!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddemergencyAdminPage');
     // alert(this.itemRef);
    this.itemRef.on('value',itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
    });
  }

  addService(emergType,emergency_number,emergency_web,emergency_email){

 
    alert(this.emergType.value);
     alert(this.emergency_number.value);
    alert(this.emergency_web.value);
    alert(this.emergency_email.value);
      this.fdb.list("/emerg_contact/").push({'E_type':this.emergType.value,'E_number':this.emergency_number.value,'E_email':this.emergency_email.value,'E_web':this.emergency_web.value})
       .then(data => {

      console.log('got data ', data);
      this.alert('Emergency Details Added Successfully!');
      this.navCtrl.push(EmergencyListAdminPage);
    }, error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });

  }


}
