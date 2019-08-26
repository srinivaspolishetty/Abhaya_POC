import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripDetailsApiService {

  private url = `${environment.apiBase}${environment.version}`;
  constructor(private httpClient: HttpClient) { }

  getAll(page, size, isTripClosed, startDate, searchValue) {
    const url = `${this.url}/tripDetails?page=${page}&size=${size}&isTripClosed=${isTripClosed}`;
    return this.httpClient.get(`${url}&startDate=${startDate}&searchValue=${searchValue}`);
  }

  getTripTrackingDetails(tripId) {
    return this.httpClient.get(`${this.url}/tripTrackingDetails?tripId=${tripId}`);
  }

  getTripDetails(tripId) {
    return this.httpClient.get(`${this.url}/tripDetails/${tripId}`);
  }
}
