import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentlistPage } from './residentlist';

@NgModule({
  declarations: [
    ResidentlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentlistPage),
  ],
})
export class ResidentlistPageModule {}
