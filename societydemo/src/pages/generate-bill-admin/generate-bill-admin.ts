
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BillAdminPage } from '../bill-admin/bill-admin';
import { AddchargesAdminPage } from './../addcharges-admin/addcharges-admin';


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

public users =[];
authForm: FormGroup;
unm:string;
flat:number;
Utype:string;
pan:number;
park:number;
total:number;
charges1:number;
charges2:number;
charges3:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.users = [
      {name:'mayuri Parmar',flat:'1',uid:'1'},
      {name:'Tejaswi Pathari',flat:'2',uid:'2'},
      {name:'Shreyas Pednekar',flat:'3',uid:'3'},
      {name:'Mitesh Solanki',flat:'4',uid:'4'},
      {name:'Dhaval Parmar',flat:'5',uid:'5'},
  ];
    this.authForm = formBuilder.group({
      unm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      flat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      Utype: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      pan: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      park: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      total: ['',Validators.compose([Validators.required])],
      charges1: ['',Validators.compose([Validators.required])],
      charges2: ['',Validators.compose([Validators.required])],
      charges3: ['',Validators.compose([Validators.required])],

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillAdminPage');
  }
  onSubmit(value: any): void {

        this.navCtrl.push(BillAdminPage);

      }
      addcharges(){
        this.navCtrl.push(AddchargesAdminPage);

      }
}
