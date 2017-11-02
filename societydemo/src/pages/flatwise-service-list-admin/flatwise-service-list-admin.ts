
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlatwiseServiceListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flatwise-service-list-admin',
  templateUrl: 'flatwise-service-list-admin.html',
})
export class FlatwiseServiceListAdminPage {

  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlatwiseServiceListAdminPage');
    this.items = [
      {Name: 'Hemant Parekh', Flat: '1',Number:'1234567892',Service:'driver'},
      {Name: 'Lata sonawane', Flat: '2',Number:'1234567893',Service:'maid'},
      {Name: 'Ashvin kumar', Flat: '3',Number:'1234567894',Service:'WasherMan'},
      {Name: 'Hemant Parekh', Flat: '4',Number:'1234567895',Service:'driver'}
    ];
  }

}
