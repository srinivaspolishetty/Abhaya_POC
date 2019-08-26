import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeviceCommunicationServiceApi {

    constructor(private httpClient: HttpClient) { }

    getCommunicationDetails(page, size, status, movement, stateId, districtId, cityId, searchvalue, searchDate ) {
        let url = `${environment.apiBase}${environment.version}/deviceCommunication?`;
        url += `page=${page}&size=${size}&status=${status}&movement=${movement}&stateId=${stateId}&districtId=${districtId}`;
        url += `&cityId=${cityId}&searchValue=${searchvalue}&searchDate=${searchDate}`;
        return this.httpClient.get(url);
    }
    getDeviceCommunicationSummary(stateId, districtId, cityId, searchDate) {
        let url = `${environment.apiBase}${environment.version}/deviceCommunication/statusSummary?`;
        url += `stateId=${stateId}&districtId=${districtId}&cityId=${cityId}&searchDate=${searchDate}`;
        return this.httpClient.get(url);
    }

    getMovementSummary(stateId, districtId, cityId, searchDate) {
        let url = `${environment.apiBase}${environment.version}/deviceCommunication/movementSummary?`;
        url += `stateId=${stateId}&districtId=${districtId}&cityId=${cityId}&searchDate=${searchDate}`;
        return this.httpClient.get(url);
    }
}
