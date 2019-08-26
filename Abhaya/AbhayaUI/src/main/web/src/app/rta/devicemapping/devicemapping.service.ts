import { Injectable } from '@angular/core';
import { IoTMappingModel } from './iotmapping.model';
import { Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DevicemappingService {

  subject = new Subject<IoTMappingModel>();

  constructor() { }

 /*  sendMessage(message: IoTMappingModel) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<IoTMappingModel> {
    return this.subject.asObservable();
  } */
}
