import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { MeetingMembersComponent } from './meeting-members/meeting-members.component';
import { MeetingModelComponent } from './meeting-model/meeting-model.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { TaskListComponent } from './task-list/task-list.component';

import {ServiceModuleService} from './service-module.service';

import{MeetingInfoServiceService} from './meeting-info/meeting-info-service.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from '../assets/shared/basrurl';
import { Directive } from '@angular/core';


@NgModule({

   imports: [
   BrowserModule,
   AppRoutingModule,
   HttpModule
  ],

  declarations: [
    AppComponent,
    MeetingInfoComponent,
    MeetingMembersComponent,
    MeetingModelComponent,
    NewMeetingComponent,
    TaskListComponent
  ],
 

  providers: [
  {provide: 'BaseURL', useValue: baseURL},
  ServiceModuleService,
  MeetingInfoServiceService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
