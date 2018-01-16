import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import { InAppBrowser } from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
  selector: "page-news",
  templateUrl: "news.html"
})
export class NewsPage {
  posts:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    public http:Http
  )
  
  {
    const browser = this.iab.create(
      "https://tctechcrunch2011.files.wordpress.com/",
      "_self",
      "location=yes"
    );


  //    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
  //     this.posts = data.data.children;
  // });

  }


 

  
}
