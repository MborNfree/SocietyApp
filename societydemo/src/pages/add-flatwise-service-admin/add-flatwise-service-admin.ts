import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EventListAdminPage } from '../event-list-admin/event-list-admin';

/**
 * Generated class for the AddFlatwiseServiceAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-flatwise-service-admin',
  templateUrl: 'add-flatwise-service-admin.html',
})
export class AddFlatwiseServiceAdminPage {
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
    console.log('ionViewDidLoad AddFlatwiseServiceAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');

        this.navCtrl.push(EventListAdminPage);

      }
}
