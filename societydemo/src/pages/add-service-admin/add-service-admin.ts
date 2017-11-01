import { ServiceListAdminPage } from './../service-list-admin/service-list-admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the AddServiceAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-service-admin',
  templateUrl: 'add-service-admin.html',
})
export class AddServiceAdminPage {

  authForm: FormGroup;
  eventimg:any;
  eventnm:string;
  eventdt:any;
  eventvenue:string;
  title: string;
  description: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventvenue: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventimg: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddServiceAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');

        this.navCtrl.push(ServiceListAdminPage);

      }

}
