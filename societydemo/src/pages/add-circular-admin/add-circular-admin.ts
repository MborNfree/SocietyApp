
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { CircularListAdminPage } from './../circular-list-admin/circular-list-admin';
/**
 * Generated class for the AddCircularAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-circular-admin',
  templateUrl: 'add-circular-admin.html',
})

export class AddCircularAdminPage {

  authForm: FormGroup;
  Circularnm:string;
  cfile:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.authForm = formBuilder.group({
      Circularnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
       cfile: ['', Validators.compose([Validators.required])]

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCircularAdminPage');
  }

  onSubmit(value: any): void {
    alert('added');
  this.navCtrl.push(CircularListAdminPage);

}
}
