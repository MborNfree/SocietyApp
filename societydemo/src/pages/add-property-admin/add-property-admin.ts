
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PropertyListAdminPage } from './../property-list-admin/property-list-admin';
/**
 * Generated class for the AddPropertyAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-property-admin',
  templateUrl: 'add-property-admin.html',
})
export class AddPropertyAdminPage {
  authForm: FormGroup;
  eventimg:any;
  eventnm:any;
  eventdt:any;
  eventvenue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventvenue: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventimg: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPropertyAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');
          // let newItem = {
          //   title: this.title,
          //   description: this.description
          // };

          // this.view.dismiss(newItem);

        this.navCtrl.push(PropertyListAdminPage);

      }
}
