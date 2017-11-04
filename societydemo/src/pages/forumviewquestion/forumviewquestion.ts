import { ForumPage } from './../forum/forum';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat-service";
import { Events, Content, TextInput } from 'ionic-angular';

/**
 * Generated class for the ForumviewquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forumviewquestion',
  templateUrl: 'forumviewquestion.html',
})
export class ForumviewquestionPage {


  showEmojiPicker = false;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public chatService: ChatService,
              public events: Events,) {


  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
}

switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
        this.messageInput.setFocus();
    }
    this.content.resize();
    this.scrollToBottom();
}

scrollToBottom() {
  setTimeout(() => {
      if (this.content.scrollToBottom) {
          this.content.scrollToBottom();
      }
  }, 400)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumviewquestionPage');
  }

}
