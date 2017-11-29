import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RuleListAdminPage } from './rule-list-admin';

@NgModule({
  declarations: [
    RuleListAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(RuleListAdminPage),
  ],
})
export class RuleListAdminPageModule {}
