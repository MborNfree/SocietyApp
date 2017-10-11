import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteelistPage } from './committeelist';

@NgModule({
  declarations: [
    CommitteelistPage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteelistPage),
  ],
})
export class CommitteelistPageModule {}
