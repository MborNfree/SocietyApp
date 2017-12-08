import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FlatwiseServiceListAdminPage } from './../flatwise-service-list-admin/flatwise-service-list-admin';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-flatwise-service-admin',
  templateUrl: 'add-flatwise-service-admin.html',
})
export class AddFlatwiseServiceAdminPage {

  flatwiseServices: AngularFireList<any>;

  authForm: FormGroup;

  // Personnm:string;
  // Serviceflat:string;
  // Personno:number;

  fwServices: any;

  @ViewChild('personName') personName;
  @ViewChild('personFlat') personFlat;
  @ViewChild('personNo') personNo;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public fdb: AngularFireDatabase,
              public fire: AngularFireAuth) {

      this.flatwiseServices = fdb.list('/flatwiseservice');

      this.authForm = formBuilder.group({
      Personnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      Serviceflat: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      Personno: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(10)])],

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFlatwiseServiceAdminPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  addFlatwiseServices(personName, personFlat, personNo){

    // alert(this.personName.value);
    // alert(this.personFlat.value);
    // alert(this.personNo.value);

    this.fdb.list("/flatwiseservice/").push({ 'flatServiceName': this.personName.value, 'flatServiceNo': this.personFlat.value, 'flatServiceCntNo': this.personNo.value})
    .then(data => {


      console.log('got data ', data);
      this.alert('Flatwise Service Added Successfully!');
      this.navCtrl.push(FlatwiseServiceListAdminPage);
    }, error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });

  }

  // onSubmit(value) {

  //   this.fwServices = JSON.stringify({ value });
  //   alert('value'+ this.fwServices);



  //   alert('personName' + this.fwServices.value);
  //   alert('personFlat' + this.fwServices.Serviceflat.value);
  //   alert('personNo' + this.fwServices.Personno.value);

  //   this.fdb.list("/flatwiseServices/").push({ 'servicePersonName': personName, 'servicePersonFlat': personFlat, 'servicePersonNo': personNo})
  //   .then(data => {


  //     console.log('got data ', data);
  //     this.alert('Flatwise Service Added Successfully!');
  //     this.navCtrl.push(FlatwiseServiceListAdminPage);
  //   }, error => {
  //     console.log('got an error ', error);
  //     this.alert(error.message);
  //   });
  // }
}
