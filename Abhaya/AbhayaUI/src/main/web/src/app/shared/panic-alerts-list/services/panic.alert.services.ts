import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PanicApiService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };
    constructor(private httpClient: HttpClient) { }

    getAll(page, size, searchValue, isClosed, districtId, cityId, eventType, searchDate) {
        let url = `${environment.apiBase}${environment.version}/distress?page=${page}&size=${size}&searchValue=${searchValue}`;
        url = `${url}&isClosed=${isClosed}`;
        return this.httpClient.get(`${url}&districtId=${districtId}&cityId=${cityId}&eventType=${eventType}&searchDate=${searchDate}`);
    }

    getAllVideo() {
        const url = `${environment.apiBase}${environment.version}/distress`;
        return this.httpClient.get(`${url}?eventType=MOBILE&isClosed=false`);
    }

    getPanicAlert(id) {
        return this.httpClient.get(`${environment.apiBase}${environment.version}/distress?id=${id}`);
    }

    getPanicDetailsById(id) {
        return this.httpClient.get(`${environment.apiBase}${environment.version}/distress/${id}`);
    }

    getPanicByTripId(id) {
        return this.httpClient.get(`${environment.apiBase}${environment.version}/distress?tripId=${id}`);
    }

    updatePanicAlert(selectedId) {
        const url = `${environment.apiBase}${environment.version}/distress/updateDistressStatus?distressId=${selectedId}`;
        return this.httpClient.post(`${url}`, this.httpOptions);
    }
}
