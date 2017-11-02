
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BillchargeListAdminPage } from './../billcharge-list-admin/billcharge-list-admin';
/**
 * Generated class for the AddchargesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcharges-admin',
  templateUrl: 'addcharges-admin.html',
})
export class AddchargesAdminPage {

  authForm: FormGroup;
  chargenm:string;
  chargetype:string;
  chargeamt:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.authForm = formBuilder.group({
      chargenm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(15)])],
      chargetype: ['', Validators.compose([Validators.required])],
      chargeamt: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])]

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddchargesAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');

        this.navCtrl.push(BillchargeListAdminPage);

      }

}
