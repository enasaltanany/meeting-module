import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { MeetingModelComponent } from './meeting-model/meeting-model.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { TaskListComponent } from './task-list/task-list.component';
import {ServiceModuleService} from './service-module.service';
import { MeetingInfoServiceService} from './Services/Meeting_Info/meeting-info-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from '../assets/shared/basrurl';
import {MeetingListItemComponent} from './meeting-list-item/meeting-list-item.component';
import {MeetingListItemDetailedComponent} from './meeting-list-item/meeting-list-item-detailed.component';
import { Pipe,PipeTransform  } from '@angular/core';
import {statusPipe}  from './meeting-list-item/status-pipe.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MemberServiceService} from './Services/Members/member-service.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';



@NgModule({

   imports: [
   BrowserModule,
   AppRoutingModule,
   HttpModule,
   ReactiveFormsModule,
   MultiselectDropdownModule,
   NgbModule.forRoot()
 ],

  declarations: [
    AppComponent,
    MeetingInfoComponent,
    MeetingModelComponent,
    NewMeetingComponent,
    TaskListComponent,
    MeetingListItemComponent,
    MeetingListItemDetailedComponent,
    statusPipe,
    NewMeetingComponent
  ],
 

  providers: [
  {provide: 'BaseURL', useValue: baseURL},
  ServiceModuleService,
  MeetingInfoServiceService,
  NgbModal,
  MemberServiceService,

  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
