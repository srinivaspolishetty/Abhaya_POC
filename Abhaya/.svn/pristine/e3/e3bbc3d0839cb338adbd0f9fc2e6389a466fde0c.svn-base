import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeServiceapi {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };
  creatState(createObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/createState`, createObject, this.httpOptions);
  }

  createDistrict(createObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/createDistrict`, createObject, this.httpOptions);
  }

  createCity(createObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/createCity`, createObject, this.httpOptions);
  }


  getStates() {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=stateService&page=0&size=25`;
    return this.httpClient.get(url);
  }

  getDistricts(value) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=districtService&extraParams=${value}&page=0&size=25`;
    return this.httpClient.get(url);
  }

  getCities(value) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=cityService&extraParams=${value}&page=0&size=25`;
    return this.httpClient.get(url);
  }
}
