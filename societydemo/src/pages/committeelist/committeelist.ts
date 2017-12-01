import { CommitteeMemberProfilePage } from './../committee-member-profile/committee-member-profile';
import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CommitteelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committeelist',
  templateUrl: 'committeelist.html',
})
export class CommitteelistPage {

  public Committeeitems = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.Committeeitems = _data;
     console.log(this.Committeeitems);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteelistPage');
  }
      viewItem(item){
        this.navCtrl.push(MemberprofilePage, {
          item: item
        });
      }

}
