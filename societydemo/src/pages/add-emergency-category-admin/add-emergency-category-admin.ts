import { EmergencyListAdminPage } from './../emergency-list-admin/emergency-list-admin';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-emergency-category-admin',
  templateUrl: 'add-emergency-category-admin.html',
})
export class AddEmergencyCategoryAdminPage {

  emergencyCategories: AngularFireList<any>;
  authForm: FormGroup;
  EmergencyCatnm:string;

    @ViewChild('emergencyCategory') emergencyCategory;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public alertCtrl: AlertController,public fdb: AngularFireDatabase,public fire: AngularFireAuth) {

    this.emergencyCategories = fdb.list('/emergency_category');
      this.authForm = formBuilder.group({
      EmergencyCatnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2), Validators.maxLength(20)])]
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmergencyCategoryAdminPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


    addEmergencyCategory(emergencyCategory){

    alert(this.emergencyCategory.value);

    this.fdb.list("/emergency_category/").push({ 'emergency_category': this.emergencyCategory.value })
    .then(data => {

      console.log('got data ', data);
      this.alert('Service Category Added Successfully!');
      this.navCtrl.push(EmergencyListAdminPage);
    }, error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  }





}
