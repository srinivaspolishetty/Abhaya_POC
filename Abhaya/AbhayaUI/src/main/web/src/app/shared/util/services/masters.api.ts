import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MastersServicesApi {

  constructor(private httpClient: HttpClient) { }
  getStates() {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/comboData?actionType=stateService&page=0&size=25`);
  }

  getDistricts(value) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=districtService&extraParams=${value}&page=0&size=25`;
    return this.httpClient.get(url);
  }

  getCities(value) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=cityService&extraParams=${value}&page=0&size=25`;
    return this.httpClient.get(url);
  }

  getRoles() {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=rolesService&page=0&size=25`;
    return this.httpClient.get(url);
  }

  getUserLevels(userLevelId: Number) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=userLevelService&extraParams=${userLevelId}`;
    return this.httpClient.get(url);
  }

  getDepartments(departmentId: Number) {
    const url = `${environment.apiBase}${environment.version}/comboData?actionType=departmentsService&extraParams=${departmentId}`;
    return this.httpClient.get(url);
  }

  getRawData(page, size, searchValue, searchDate) {
    let url = `${environment.apiBase}${environment.version}/rawData?page=${page}&size=${size}`;
    url += `&searchValue=${searchValue}&packetDate=${searchDate}`;
    return this.httpClient.get(url);
  }

  getModemData(page, size, searchValue, searchDate, districtId) {
    let url = `${environment.apiBase}${environment.version}/modemDetails?page=${page}&size=${size}`;
    url += `&searchValue=${searchValue}&searchDate=${searchDate}&districtId=${districtId}`;
    return this.httpClient.get(url);
  }
  getAllSuspiciousVehicles(page, size) {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/watchVehicle?page=${page}&size=${size}`);
  }
}
