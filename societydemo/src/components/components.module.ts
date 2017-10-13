import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list';
@NgModule({
	declarations: [AccordionListComponent],
	imports: [],
	exports: [AccordionListComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
	
})
export class ComponentsModule {}
