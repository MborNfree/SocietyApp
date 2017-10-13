import { Component , Input, ViewChild, ElementRef, Renderer   } from '@angular/core';

/**
 * Generated class for the AccordionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-list',
  templateUrl: 'accordion-list.html'
})
export class AccordionListComponent {

  @ViewChild('wrapper', {read: ElementRef}) wrapper;
  @Input('expanded') expanded;
  @Input('height') height;
  text: string;

  constructor(public renderer: Renderer) {
    console.log('Hello AccordionListComponent Component');
    this.text = 'Hello World';
  }



  ngAfterViewInit(){
    if(this.height){
      this.renderer.setElementStyle(this.wrapper.nativeElement, 'height', this.height + 'px');    
    }
  }


}
