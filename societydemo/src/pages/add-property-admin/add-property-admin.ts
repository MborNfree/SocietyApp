
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
  Propertynm:string;
  type:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      Propertynm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      type: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])]
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPropertyAdminPage');
  }
  onSubmit(value: any): void {
          alert('added');
        this.navCtrl.push(PropertyListAdminPage);

      }
}
