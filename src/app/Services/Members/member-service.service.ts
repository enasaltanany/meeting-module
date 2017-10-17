import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {NewMeetingComponent} from '../../new-meeting/new-meeting.component';


@Injectable()
export class MemberServiceService {
    dataObj: any;

  constructor(private http: Http) { }
 
    GetMembers(){
      return this.http.get('../../assets/json-files/meeting-member.json').map((res :Response) => {
      return res.json();
    })
  }
}
