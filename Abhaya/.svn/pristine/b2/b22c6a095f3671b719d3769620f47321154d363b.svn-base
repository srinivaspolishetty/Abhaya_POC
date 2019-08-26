import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getAll(page, size, searchValue, districtId, cityId, searchDate) {
    const url = `${environment.apiBase}${environment.version}/vehicleDetails?page=${page}&size=${size}&searchValue=${searchValue}`;
    return this.httpClient.get(`${url}&districtId=${districtId}&cityId=${cityId}&date=${searchDate}`);
  }

  getAllByStatus(page, size, devicestatus, selectedDate) {
    const url = `${environment.apiBase}${environment.version}/vehicleDetails`;
    return this.httpClient.get(`${url}?page=${page}&size=${size}&isDeviceMapped=${devicestatus}&date=${selectedDate}`);
  }

  getAllPending(page, size, devicestatus) {
    const url = `${environment.apiBase}${environment.version}/vehicleDetails`;
    return this.httpClient.get(`${url}?page=${page}&size=${size}&isDeviceMapped=${devicestatus}`);
  }

  getVehicleDetails(rcNumber) {
    return this.httpClient.get(`${environment.apiBase}${environment.version}/vehicleDetails?rcNumber=${rcNumber}`);
  }

  mapToIotDevice(mappingObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/mapIoTDevice`, mappingObject, this.httpOptions);
  }

  createVehicle(mappingObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/createVehicle`, mappingObject, this.httpOptions);
  }

  // getLiveVehicles() {
  //   return this.httpClient.get(`${environment.apiBase}${environment.version}/getLiveVehicles`);
  // }

  getLiveVehicles(stateId) {
    const url = `${environment.apiBase}${environment.version}/deviceCommunication?status=Communicating`;
    return this.httpClient.get(`${url}&stateId=${stateId}`);
  }

  getVehicleLocation(iotNumber) {
    const url = `${environment.apiBase}${environment.version}/getLatestLiveLocation`;
    return this.httpClient.get(`${url}?serialNumber=${iotNumber}`);
  }
}
