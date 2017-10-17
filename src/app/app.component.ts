import {Component } from '@angular/core';
import {MeetingInfoComponent} from './meeting-info/meeting-info.component';
import {MeetingModelComponent} from './meeting-model/meeting-model.component';
import {NewMeetingComponent} from './new-meeting/new-meeting.component';
import {ServiceModuleService} from './service-module.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
}
