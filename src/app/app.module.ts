import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { MeetingMembersComponent } from './meeting-members/meeting-members.component';
import { MeetingModelComponent } from './meeting-model/meeting-model.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


import {ServiceModuleService} from './service-module.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MeetingInfoComponent,
    MeetingMembersComponent,
    MeetingModelComponent,
    NewMeetingComponent,
    TaskListComponent
  ],
  imports: [
   AppRoutingModule
  ],
  providers: [ServiceModuleService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
