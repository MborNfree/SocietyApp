import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the SendSmsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-sms-modal',
  templateUrl: 'send-sms-modal.html',
})
export class SendSmsModalPage {
  //Text object
  text = {
    "number": "",
    "message": "",
  };
    SMS: any;
    phonenumber:number;
    data:string;
    textmessage:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,private toast:ToastController,private sms: SMS) {

    this.data = JSON.stringify(navParams.get('data'));
    //console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendSmsModalPage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

  sendTextMessage() {
    //alert(this.text.number);
    this.sms.send(this.text.number, this.text.message).then((result) => {
      //alert(result);
      let successToast = this.toast.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
     //alert(error);
      let errorToast = this.toast.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }
}
