import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteeMemberProfilePage } from './committee-member-profile';

@NgModule({
  declarations: [
    CommitteeMemberProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteeMemberProfilePage),
  ],
})
export class CommitteeMemberProfilePageModule {}
