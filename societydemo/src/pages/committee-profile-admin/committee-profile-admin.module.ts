import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CommitteeProfileAdminPage } from "./committee-profile-admin";

@NgModule({
  declarations: [CommitteeProfileAdminPage],
  imports: [IonicPageModule.forChild(CommitteeProfileAdminPage)]
})
export class CommitteeProfileAdminPageModule {}
