import { ForumquestionPage } from './../forumquestion/forumquestion';
import { Component, QueryList } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  public items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }


    openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
    this.items = [
      {ques1: 'I forgot my password?'},
      {ques1: 'Illegal charges from Tenants of a CHS'},
      {ques1: 'Parking Issue between two reserved car parking'},
      {ques1: 'Extra maintenance on rented flat'},
      {ques1: ' Noise pollution in co - operative housing society '}
    ];
  }



    askquestion(){
this.navCtrl.push(ForumquestionPage);
    }





}
