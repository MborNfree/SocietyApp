import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CircularlistPage } from './circularlist';

@NgModule({
  declarations: [
    CircularlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CircularlistPage),
  ],
})
export class CircularlistPageModule {}
