import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class MeetingInfoServiceService {
	dataObj: any;

  constructor(private http: Http) { 
  	
  }


  getData(){
  	return this.http.get('../../assets/json-files/meeting-info.json').subscribe((res) => {
  		console.log(res.json())
  	})
  	
  }
}
