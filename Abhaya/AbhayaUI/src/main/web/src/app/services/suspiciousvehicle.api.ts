import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuspiciousVehicleServiceApi {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };
  addSuspiciousVehicle(vehicleNumber) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/watchVehicle`, vehicleNumber, this.httpOptions);
  }

  removeSuspiciousVehicle(vehicleNumber) {
    const url = `${environment.apiBase}${environment.version}/watchVehicle/deleteWatchVehicle/${vehicleNumber}`;
    return this.httpClient.post(url, this.httpOptions);
  }

}
