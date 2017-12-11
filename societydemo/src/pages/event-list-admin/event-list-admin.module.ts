import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EventListAdminPage } from "./event-list-admin";

@NgModule({
  declarations: [EventListAdminPage],
  imports: [IonicPageModule.forChild(EventListAdminPage)]
})
export class EventListAdminPageModule {}
