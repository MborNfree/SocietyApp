<<<<<<< HEAD
import { SMS } from '@ionic-native/sms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

=======
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

// import { AngularFireAuth } from 'angularfire2/auth';
import { SMS } from "@ionic-native/sms";
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027

/**
 * Generated class for the MemberprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-memberprofile",
  templateUrl: "memberprofile.html"
})
export class MemberprofilePage {
  users: {}[];
  public itemsParam;
<<<<<<< HEAD
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

=======
  //Text object
  text = {
    number: "",
    message: ""
  };
  SMS: any;
  phonenumber: number;
  textmessage: string;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase,
    private toast: ToastController,
    private sms: SMS
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.users = _data;
        console.log(this.users);
      });
    this.itemsParam = navParams.get("item");
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027
  }
  sendSms(cnt: number) {
    alert(cnt);
    var data = { message: "hello world", contact: cnt };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", { data: data });
    modalPage.present();
  }
<<<<<<< HEAD
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
=======
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027

  ionViewDidLoad() {
    console.log("ionViewDidLoad MemberprofilePage");
  }
}
