import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RouteDeviationService {

    constructor(private httpClient: HttpClient) { }

    getAll(page, size, searchValue, selectDate, districtId, cityId) {
        const url = `${environment.apiBase}${environment.version}/routeDeviation`;
        return this.httpClient.get(`${url}?page=${page}&size=${size}&searchValue=${searchValue}&searchDate=${selectDate}&districtId=${districtId}&cityId=${cityId}`);
    }

    getRouteDeviationDetails(page, size, rcnumber, rfid, serialnumber, dlnumber, cmobileno, searchvalue, searchdate, tripid) {
        let url = `${environment.apiBase}${environment.version}/routeDeviation?`;
        url += `page=${page}&size=${size}&rcNumber=${rcnumber}&rfId=${rfid}&serialNumber=${serialnumber}`;
        url += `&dlNumber=${dlnumber}&citizenMobileNumber=${cmobileno}&searchValue=${searchvalue}&searchDate=${searchdate}&tripId=${tripid}`;
        return this.httpClient.get(url);
    }
}
