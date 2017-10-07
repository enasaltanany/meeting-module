import { Component, OnInit } from '@angular/core';

import{MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';

@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {
 
  constructor(private mInfo: MeetingInfoServiceService) { }

  ngOnInit() {
  	
  	
  	 console.log(this.mInfo.getData());
  }

}
