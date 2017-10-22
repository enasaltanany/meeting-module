import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { MeetingInfoServiceService} from '../Services/Meeting_Info/meeting-info-service.service';
import { MeetingListItemComponent } from '../meeting-list-item/meeting-list-item.component';
import { MeetingListItemDetailedComponent } from '../meeting-list-item/meeting-list-item-detailed.component';
import {statusPipe}  from '../meeting-list-item/status-pipe.pipe';
import { MeetingMember } from '../Interface';
import { MeetingModel } from '../Interface';



@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {
 

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


