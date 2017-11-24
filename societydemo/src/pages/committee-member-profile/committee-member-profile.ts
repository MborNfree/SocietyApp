import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommitteeMemberProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-member-profile',
  templateUrl: 'committee-member-profile.html',
})
export class CommitteeMemberProfilePage {
  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeMemberProfilePage');
  }

}
