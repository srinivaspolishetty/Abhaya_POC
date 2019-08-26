import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripTrackingApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(page, size, searchDate, searchValue) {
    const url = `${environment.apiBase}${environment.version}`;
    return this.httpClient.get(`${url}/tripTrackingDetails?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`);
  }
  getStatusInfo(trackingid) {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/statusInfo?trackId=${trackingid}`);
  }
}
