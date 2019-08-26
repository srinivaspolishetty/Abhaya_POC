import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverApiService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(page, size, searchValue, districtId, cityId) {
    const url = `${environment.apiBase}${environment.version}/driverDetails`;
    return this.httpClient.get(`${url}?page=${page}&size=${size}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}`);
  }

  getDriverDetails(dlNumber) {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/driverDetails?dlNumber=${dlNumber}`);
  }

  createDriver(mappingObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/createDriver`, mappingObject, this.httpOptions);
  }
}
