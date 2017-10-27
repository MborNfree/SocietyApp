import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteeListAdminPage } from './committee-list-admin';

@NgModule({
  declarations: [
    CommitteeListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteeListAdminPage),
  ],
})
export class CommitteeListAdminPageModule {}
