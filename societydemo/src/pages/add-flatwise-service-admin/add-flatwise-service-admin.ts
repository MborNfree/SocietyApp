
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FlatwiseServiceListAdminPage } from './../flatwise-service-list-admin/flatwise-service-list-admin';

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

  Personnm:string;
  Serviceflat:string;
  Personno:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      Personnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      Serviceflat: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      Personno: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(10)])],

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFlatwiseServiceAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');

        this.navCtrl.push(FlatwiseServiceListAdminPage);

      }
}
