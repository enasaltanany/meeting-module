import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { MeetingInfoServiceService} from '../Services/Meeting_Info/meeting-info-service.service';
import { MeetingListItemComponent } from '../meeting-list-item/meeting-list-item.component';
import { MeetingListItemDetailedComponent } from '../meeting-list-item/meeting-list-item-detailed.component';
import { StatusPipe}  from '../meeting-list-item/status-pipe.pipe';
import { MeetingMember,MeetingModel } from '../Interfaces';

@Component({
  selector: 'app-meeting-landing-page',
  templateUrl: './meeting-landing-page.component.html',
  styleUrls: ['./meeting-landing-page.component.css']
})

export class MeetingLandingPage implements OnInit {

  public meetings :MeetingModel[];

  constructor(private mInfo: MeetingInfoServiceService) { }

  ngOnInit() {

    this.mInfo.getData().subscribe((meetings: MeetingModel[])=> {
      this.meetings=meetings;
    })
  }

  toggleExpand(meeting) {
    meeting.expanded = !meeting.expanded;
  }
}