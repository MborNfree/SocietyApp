import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenerateBillAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-bill-admin',
  templateUrl: 'generate-bill-admin.html',
})
export class GenerateBillAdminPage {
unm:string;
flat:number;
Utype:string;
pan:number;
park:number;
charges1:string;
charges2:string;
charges3:string;
string3:string;
total:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateBillAdminPage');
  }

}
