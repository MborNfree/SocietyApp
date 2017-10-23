import {  } from './eventlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EventlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {


  // slides = [
  //   {
  //     title: "Diwali",
  //     description: " The<b>The Celebration Of Lights</b><br> showcases a number of useful components that are included out of the box with Ionic.",
  //     image: "../assets/diwali.jpg",
  //   },
  //   {
  //     title: "Holi",
  //     description: "The<b> festival of color</b><br>is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
  //     image: "../assets/holi.jpg",
  //   },
  //   {
  //     title: "Christmas",
  //     description: "The<b>Ionic Cloud</b><br> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
  //     image: "../assets/diwali.jpg",
  //   }
  // ];



  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
   }

   openModal(characterNum) {
    
        let modal = this.modalCtrl.create( characterNum);
        modal.present();
      }




//       @Component({
//         template: `
//       <ion-header>
//         <ion-toolbar>
//           <ion-title>
//             Description
//           </ion-title>
//           <ion-buttons start>
//             <button ion-button (click)="dismiss()">
//               <span ion-text color="primary" showWhen="ios">Cancel</span>
//               <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//             </button>
//           </ion-buttons>
//         </ion-toolbar>
//       </ion-header>
//       <ion-content>
//         <ion-list>
//             <ion-item>
//               <ion-avatar item-start>
//                 <img src="{{character.image}}">
//               </ion-avatar>
//               <h2>{{character.name}}</h2>
//               <p>{{character.quote}}</p>
//             </ion-item>
//             <ion-item *ngFor="let item of character['items']">
//               {{item.title}}
//               <ion-note item-end>
//                 {{item.note}}
//               </ion-note>
//             </ion-item>
//         </ion-list>
//       </ion-content>
//       `
//       });
// }
    
//       export class ModalContentPage {
//         viewCtrl: any;
//         character;
      
//         constructor(
        
//           public params: NavParams
         
//         ) {
//           var characters = [
//             {
//               name: 'Diwali',
//               quote: 'Sneaky little hobbitses!',
//               image: 'assets/diwali.jpg',
//               items: [
//                 { title: 'Race', note: 'Hobbit' },
//                 { title: 'Culture', note: 'River Folk' },
//                 { title: 'Alter Ego', note: 'Smeagol' }
               
//               ]
//             },
//             {
//               name: 'Holi',
//               quote: 'Go back, Sam! I\'m going to Mordor alone!',
//               image: 'assets/holi.jpg',
//               items: [
//                 { title: 'Race', note: 'Hobbit' },
//                 { title: 'Culture', note: 'Shire Folk' },
//                 { title: 'Weapon', note: 'Sting' }
//               ]
//             },
//             {
//               name: 'Christmas',
//               quote: 'What we need is a few good taters.',
//               image: 'assets/holi.jpg',
//               items: [
//                 { title: 'Race', note: 'Hobbit' },
//                 { title: 'Culture', note: 'Shire Folk' },
//                 { title: 'Nickname', note: 'Sam' }
//               ]
//             }
//           ];
//           this.character = characters[this.params.get('charNum')];
//         }
      
//         dismiss() {
//           this.viewCtrl.dismiss();
//         }



  ionViewDidLoad() {      
    console.log('ionViewDidLoad EventlistPage');
  }

}
