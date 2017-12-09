import { SMS } from '@ionic-native/sms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
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
   //Text object
  text = {
    "number": "",
    "message": "",
  };
    SMS: any;
    phonenumber:number;
    textmessage:string;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase
,private toast:ToastController,private sms: SMS  ) {
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
 sendTextMessage() {
    alert(this.itemsParam.Contactnumber);
    this.sms.send(this.text.number, this.text.message).then((result) => {
      alert(result);
      let successToast = this.toast.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      alert(error);
      let errorToast = this.toast.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberprofilePage');
  }

}
