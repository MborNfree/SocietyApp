import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserDocumentDetailAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-document-detail-admin',
  templateUrl: 'user-document-detail-admin.html',
})
export class UserDocumentDetailAdminPage {

  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDocumentDetailAdminPage');
  }

}
