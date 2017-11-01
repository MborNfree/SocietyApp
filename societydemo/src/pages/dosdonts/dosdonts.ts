import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the DosdontsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosdonts',
  templateUrl: 'dosdonts.html',
})
export class DosdontsPage {

  Instructions:string="DoS";
  //  isAndroid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public Platform:Platform) {


    this.account.Instructions="DoS";
    //  this.isAndroid = Platform.is('android');
  }


  account: { Instructions: string} = {
    Instructions:'',
   
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad DosdontsPage');
  }

}
