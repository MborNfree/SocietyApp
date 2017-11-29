import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RuleListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rule-list-admin',
  templateUrl: 'rule-list-admin.html',
})
export class RuleListAdminPage {
  authForm: FormGroup;
  public doc = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,   public fdb: AngularFireDatabase) {
    this.authForm = formBuilder.group({
      rulenm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      ruletype: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])]
     });

     this.fdb.list("/society_rules/").valueChanges().subscribe(_data => {
      this.doc = _data;
     console.log(this.doc);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuleListAdminPage');
  }

}
