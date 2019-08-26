import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader';
import { Login } from './login.model';
import { UserDetails } from './userdetails.model';
import { AuthService } from "../authgaurd/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private  httpClient:  HttpClient, private spinner: SpinnerVisibilityService,
    private auth: AuthService) { }
  spinkit = Spinkit;
  loginErrorMsg: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization' : 'Basic ' + window.btoa('abhaya-app' + ':' + 'abhaya-secret')
    })
  };
  loginForm: FormGroup;
  loginModel: Login;
  // types: String[];
  ngOnInit() {
    // this.types = ['UserType', 'Rta', 'Police'];
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    this.loginForm = new FormGroup ({
      type: new FormControl('UserType'),
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  public login(): void {
    this.loginModel =  this.loginForm.value;
    const url = `${environment.apiBase}/oauth/token`;
    this.spinner.show();
     this.httpClient.post(`${url}?username=${this.loginModel.userName}&password=${this.loginModel.password}&grant_type=password`,
      {}, this.httpOptions).subscribe((data: any) => {
        this.auth.sendToken('Bearer ' + data.access_token);
        this.getUserDetails();
      }, error => {
        console.log('error', error);
        this.spinner.hide();
      }
     );
  }

  getUserDetails() {
    const headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Authorization': this.auth.getToken()
        })
      };
    this.httpClient.get(`${environment.apiBase}${environment.version}/readUser`, headers).subscribe((userDetailsdata: UserDetails) => {
        localStorage.setItem('userdetails', JSON.stringify(userDetailsdata));
        if (userDetailsdata != null && userDetailsdata.isEnabled) {
          let type = '';
          if (userDetailsdata.departmentName === 'Transport') {
            type = 'rta';
          } else {
            type = 'rta';
          }
          this.router.navigate(['/' + type]);
          this.spinner.hide();
        } else {
          this.loginErrorMsg = 'Account is disabled, Please contact administrator.';
          this.spinner.hide();
        }
      }, error => {
        this.loginErrorMsg = 'Unable to fetch the user details.';
        console.log('error', error);
        this.spinner.hide();
      });
  }

}
