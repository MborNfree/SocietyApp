import { ForumquestionPage } from "./../forumquestion/forumquestion";
import { Component } from "@angular/core";
import {
  ModalController,
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { ForumviewquestionPage } from "../forumviewquestion/forumviewquestion";

@IonicPage()
@Component({
  selector: "page-forum",
  templateUrl: "forum.html"
})
export class ForumPage {
  Instructions: string = "Unanswered";

  myInput: any;
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.account.Instructions = "Unanswered";
    //  this.isAndroid = Platform.is('android');
  }

  account: { Instructions: string } = {
    Instructions: ""
  };

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForumPage");
    this.items = [
      { ques1: "I forgot my password?" },
      { ques1: "Illegal charges from Tenants of a CHS" },
      { ques1: "Parking Issue between two reserved car parking" },
      { ques1: "Extra maintenance on rented flat" },
      { ques1: " Noise pollution in co - operative housing society " }
    ];
  }

  askquestion() {
    this.navCtrl.push(ForumquestionPage);
  }

  viewQuestion(item) {
    this.navCtrl.push(ForumviewquestionPage, {
      item: item
    });
  }
}
