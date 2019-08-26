import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUsers(page, size, searchValue, districtId, cityId) {
    const url = `${environment.apiBase}${environment.version}/userDetails`;
    return this.httpClient.get(`${url}?page=${page}&size=${size}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}`);
  }

  createUser(mappingObject) {
    return this.httpClient.post(`${environment.apiBase}${environment.version}/userDetails`, mappingObject, this.httpOptions);
  }
}
