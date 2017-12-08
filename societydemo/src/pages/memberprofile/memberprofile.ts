import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the MemberprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memberprofile',
  templateUrl: 'memberprofile.html',
})
export class MemberprofilePage {
  users: {}[];
  public itemsParam;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase
  ) {
    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;
     console.log(this.users);
    });
    this.itemsParam = navParams.get('item');

  }
  sendSms(cnt:number) {
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('SendSmsModalPage',data);
    modalPage.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberprofilePage');
  }

}
