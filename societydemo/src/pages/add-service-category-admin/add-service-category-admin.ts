import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServiceListAdminPage } from '../service-list-admin/service-list-admin';

/**
 * Generated class for the AddServiceCategoryAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-service-category-admin',
  templateUrl: 'add-service-category-admin.html',
})
export class AddServiceCategoryAdminPage {

  authForm: FormGroup;
  ServiceCatnm:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      ServiceCatnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(20)])]
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddServiceCategoryAdminPage');
  }
  onSubmit(value: any): void {

          alert('added');

        this.navCtrl.push(ServiceListAdminPage);

      }
}
