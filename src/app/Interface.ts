import { MeetingInfoServiceService} from './meeting-info/meeting-info-service.service';

export interface MeetingModel {
  "id": number;
  "meetingTitle": string;
	"organizer": string;
	"date": string;
	"location": string;
	"status": string;
  "expanded": boolean;
  "members": MeetingMember[];
}

export interface MeetingMember {
  "memberName":string;
  "jobTitle":string;
  "organization":string;
}