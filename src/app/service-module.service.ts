import { Injectable } from '@angular/core';
import { baseURL } from '../assets/shared/basrurl';
import { HttpserviceService } from './httpservice.service';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceModuleService {

  constructor(private http: Http, private processHTTPMsgService: HttpserviceService) {}


  // public getData(): Observable<any> {
  //   return this.http.get(baseURL + 'dishes')
  //                   .map(res => { return this.processHTTPMsgService.extractData(res); });
  // }

  getData(){
    this.http.get('./httpservice.service').subscribe
              (data => console.log(data));
  }

  
}
