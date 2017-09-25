import { Routes} from '@angular/router';

import {LandingComponent} from '../landing/landing.component';
import{ MeetingInfoComponent} from '../meeting-info/meeting-info.component';
import {MeetingMembersComponent} from '../meeting-members/meeting-members.component';
import {MeetingModelComponent} from '../meeting-model/meeting-model.component';
import {NewMeetingComponent} from '../new-meeting/new-meeting.component';
import{TaskListComponent}from '../task-list/task-list.component';

export const routes:Routes=[
{ path: 'home',  component: MeetingInfoComponent},
{path:'add-new-meeting', component : NewMeetingComponent},
{path:'meeting-tasks' , component:TaskListComponent},
{path:'meeting-model',component:MeetingModelComponent},
{path:'meeting-members',component:MeetingMembersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

]