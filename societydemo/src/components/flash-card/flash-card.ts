import { Component, ViewChild  } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  @ViewChild('fcContainer') fcContainer;
  @ViewChild('front') fcFront;
  @ViewChild('back') fcBack;
   toggled: boolean = true;

  text: string;

  constructor() {
    console.log('Hello FlashCardComponent Component');
    this.text = 'Hello World';
  }


  ngAfterViewChecked(){
    //equalizing the height of child divs with the largest div
    let frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
    let backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
    let h = ((frontH > backH)? frontH:backH) + 'px';
    this.fcContainer.nativeElement.style.height = h;
    this.fcBack.nativeElement.style.height = h;
    this.fcFront.nativeElement.style.height = h;
  }
  toggle() {
    this.toggled = !this.toggled;
  }


}
