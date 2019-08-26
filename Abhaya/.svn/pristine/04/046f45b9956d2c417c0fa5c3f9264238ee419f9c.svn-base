import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveTrackingServiceAPI {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };
  getVehicleAuthDetails(stateid, districtId, searchdate) {
    let url = `${environment.apiBase}${environment.version}/getAuthVehicles`;
    url = url + `?stateId=${stateid}&districtId=${districtId}&searchDate=${searchdate}`;
    return this.httpClient.get(url);
  }

  gtLiveVehicleStatus(stateid, districtid, cityid, selectDate) {
    let url = `${environment.apiBase}${environment.version}/getVehicleStatus`;
    url = url + `?stateId=${stateid}&packetDate=${selectDate}`;

    if (districtid == '') {
      return this.httpClient.get(url);
    }
   else{
    if (districtid !== '' && cityid == '') {
      url = url + `&districtId=${districtid}`;
      return this.httpClient.get(url);
    }
    else {
      url = url + `&districtId=${districtid}&cityId=${cityid}`;
      return this.httpClient.get(url);
    }
   }
  }

  getPanicSummary(eventSource, districtId, cityId, searchDate) {
    let url = `${environment.apiBase}${environment.version}/panicSummary`;
    url = url + `?eventSource=${eventSource}&districtId=${districtId}&cityId=${cityId}&searchDate=${searchDate}`;
    return this.httpClient.get(url);
  }

  getDistrictWiseChart() {
    let url = `${environment.apiBase}${environment.version}/`;
    url = url + `getVehicleIntSummaryByDistrict`;
    return this.httpClient.get(url);
  }

  getDistrictWiseTracking() {
    let url = `${environment.apiBase}${environment.version}/`;
    url = url + `getLatestLiveLocCountByDist`;
    return this.httpClient.get(url);
  }

  getMovementDetailsDistrictWise(stateId, value, searchDate) {
    let url = `${environment.apiBase}${environment.version}/`;
    url = url + `deviceCommunication/movementSummary?stateId=${stateId}&isDistrictWise=${value}&searchDate=${searchDate}`;
    return this.httpClient.get(url);
  }

  getRouteDeviationAndPanicCount(districtWise, searchDate, districtId) {
    let url = `${environment.apiBase}${environment.version}/`;
    url = url + `getRouteDeviatedAndPanicSummary?isDistrictWise=${districtWise}&searchDate=${searchDate}&districtId=${districtId}`;
    return this.httpClient.get(url);
  }

  getTripSummanyForDboard(districtWise, searchDate, districtId) {
    let url = `${environment.apiBase}${environment.version}/`;
    url = url + `getTripsSummary?isDistrictWise=${districtWise}&searchDate=${searchDate}&districtId=${districtId}`;
    return this.httpClient.get(url);
  }
}
