import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverDutyApiService {

  constructor(private  httpClient:  HttpClient) { }

  getAll(page, size, packetDate, searchValue, districtId, cityId) {
    let url = `${environment.apiBase}${environment.version}/driverDutyDetails?page=${page}&size=${size}&packetDate=${packetDate}`;
    url += `&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}`;
    return this.httpClient.get(`${url}`);
  }
}
