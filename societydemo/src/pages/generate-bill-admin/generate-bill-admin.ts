import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BillAdminPage } from '../bill-admin/bill-admin';


/**
 * Generated class for the GenerateBillAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-bill-admin',
  templateUrl: 'generate-bill-admin.html',
})
export class GenerateBillAdminPage {
  authForm: FormGroup;
unm:string;
flat:number;
Utype:string;
pan:number;
park:number;
charges1:string;
charges2:string;
charges3:string;
string3:string;
total:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillAdminPage');
  }
  onSubmit(value: any): void {

        this.navCtrl.push(BillAdminPage);

      }
}
