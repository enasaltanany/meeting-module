import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent} from '../app.component';
import { MeetingLandingPage} from '../meeting-landing-page/meeting-landing-page.component';
import { NewMeetingComponent} from '../new-meeting/new-meeting.component';
import { TaskListComponent}from '../task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';


export const routes:Routes= [
{path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'add-new-meeting', component : NewMeetingComponent},
{path:'meeting-tasks' , component:TaskListComponent},
{path:'home',component:MeetingLandingPage  },

  

]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
