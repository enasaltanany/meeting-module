import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MeetingLandingPage } from './meeting-landing-page/meeting-landing-page.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ServiceModuleService} from './service-module.service';
import { MeetingInfoServiceService} from './Services/Meeting_Info/meeting-info-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from '../assets/shared/basrurl';
import { MeetingListItemComponent} from './meeting-list-item/meeting-list-item.component';
import { MeetingListItemDetailedComponent} from './meeting-list-item/meeting-list-item-detailed.component';
import { Pipe,PipeTransform  } from '@angular/core';
import { StatusPipe}  from './meeting-list-item/status-pipe.pipe';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule , NgModel , Validators } from '@angular/forms';
import { MemberServiceService} from './Services/Members/member-service.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule}   from '@angular/forms';
import { NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl } from '@angular/forms';


@NgModule({

  imports: [
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
  ],

  declarations: [
    AppComponent,
    MeetingLandingPage,
    NewMeetingComponent,
    TaskListComponent,
    MeetingListItemComponent,
    MeetingListItemDetailedComponent,
    StatusPipe,
    NewMeetingComponent
  ],

  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    ServiceModuleService,
    MeetingInfoServiceService,
    MemberServiceService,
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }