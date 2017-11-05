import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {MeetingLandingPage} from '../../meeting-landing-page/meeting-landing-page.component';

@Injectable()
export class MeetingInfoServiceService {
	
  dataObj: any;

  constructor(private http: Http) { 

  	
  }

  getData(){
    return this.http.get('../../assets/json-files/meeting-info.json').map((res :Response) => {
    return res.json();
    })
  }
}
  