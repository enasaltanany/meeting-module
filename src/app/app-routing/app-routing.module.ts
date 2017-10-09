import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from '../app.component';

import{ MeetingInfoComponent} from '../meeting-info/meeting-info.component';
// import {MeetingMembersComponent} from '../meeting-members/meeting-members.component';
import {MeetingModelComponent} from '../meeting-model/meeting-model.component';
import {NewMeetingComponent} from '../new-meeting/new-meeting.component';
import{TaskListComponent}from '../task-list/task-list.component';


import { RouterModule, Routes } from '@angular/router';


export const routes:Routes= [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home',  component: AppComponent},
{path:'add-new-meeting', component : NewMeetingComponent},
{path:'meeting-tasks' , component:TaskListComponent},
{path:'meeting-model',component:MeetingModelComponent},
// {path:'meeting-members',component:MeetingMembersComponent},
  

]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
