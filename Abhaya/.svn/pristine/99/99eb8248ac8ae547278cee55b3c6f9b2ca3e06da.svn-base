import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashBoardApiService {

  constructor(private httpClient: HttpClient) { }

  getVehicleIntsallationSummary() {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/getVehicleIntsallationSummary`);
  }

  getVehicleStoppageSummary() {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/getVehicleStoppageSummary`);
  }

}
