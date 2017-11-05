import { MeetingInfoServiceService} from './Services/Meeting_Info/meeting-info-service.service';
import { MemberServiceService} from './Services/Members/member-service.service';


export interface MeetingModel {
  "id": number;
  "meetingTitle": string;
	"organizer": string;
	"date": string;
	"location": string;
	"status": string;
  "expanded": boolean;
  "members": number;
}

export interface MeetingMember {
  "id": number;
  "memberName":string;
  "jobTitle":string;
  "organization":string;
}

export interface Objectives {
  "objectiveContent":string;
  
}

export interface Tasks{
  "taskContent": string;
  "date": Date;
}