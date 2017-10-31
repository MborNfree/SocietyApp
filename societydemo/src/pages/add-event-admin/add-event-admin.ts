import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { EventListAdminPage } from '../event-list-admin/event-list-admin';
import { EventAdminPage } from '../event-admin/event-admin';

/**
 * Generated class for the AddEventAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event-admin',
  templateUrl: 'add-event-admin.html',
})
export class AddEventAdminPage {

  authForm: FormGroup;
  eventimg:any;
  eventnm:any;
  eventdt:any;
  eventvenue:any;
  title: string;
  description: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public view: ViewController) {

    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventvenue: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventimg: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
     });
  }

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventAdminPage');
  }

  onSubmit(value: any): void {

      alert('added');

    this.navCtrl.push(EventListAdminPage);

  }

  saveItem(){
    console.log('save');
       let newItem = {
         title: this.title,
         description: this.description
       };

       this.view.dismiss(newItem);
       this.navCtrl.push(EventAdminPage);

     }

     close(){
       this.view.dismiss();
     }

}
