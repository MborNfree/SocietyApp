import { EventlistPage } from './../eventlist/eventlist';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the AddEventCategoryAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event-category-admin',
  templateUrl: 'add-event-category-admin.html',
})
export class AddEventCategoryAdminPage {
  authForm: FormGroup;
  eventCategories: AngularFireList<any>;
  EmergencyCatnm: string;


  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public fdb: AngularFireDatabase,
    public fire: AngularFireAuth) {
      this.eventCategories = fdb.list("/emergency_category");
      this.authForm = formBuilder.group({
        EmergencyCatnm: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern("[a-zA-Z]*"),
            Validators.minLength(2),
            Validators.maxLength(20)
          ])
        ]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventCategoryAdminPage');
  }

  alert(message: string) {
    this.alertCtrl
      .create({
        title: "Info!",
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }

  // addEmergencyCategory(emergencyCategory) {
  //   alert(this.eventCategories.value);

  //   this.fdb
  //     .list("/emergency_category/")
  //     .push({ emergency_category: this.eventCategories.value })
  //     .then(
  //       data => {
  //         console.log("got data ", data);
  //         this.alert("Service Category Added Successfully!");
  //         this.navCtrl.push(EventlistPage);
  //       },
  //       error => {
  //         console.log("got an error ", error);
  //         this.alert(error.message);
  //       }
  //     );
  // }

}
