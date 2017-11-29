import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNormsPage } from './add-norms';

@NgModule({
  declarations: [
    AddNormsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNormsPage),
  ],
})
export class AddNormsPageModule {}
