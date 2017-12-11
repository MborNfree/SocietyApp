import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-forumquestion",
  templateUrl: "forumquestion.html"
})
export class ForumquestionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForumquestionPage");
  }
}
