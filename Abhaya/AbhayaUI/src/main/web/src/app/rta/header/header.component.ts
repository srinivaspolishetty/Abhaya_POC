import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../../login/userdetails.model';
import { AuthService } from "../../authgaurd/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenuFlag = false;
  showProfileFlag = false;
  userDetails: UserDetails;
  constructor(private router: Router, private authService : AuthService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
  }

  ngOnInit() {
  }

  toogleHeader() {
    this.showMenuFlag = !this.showMenuFlag;
  }

  toogleProfileHeader() {
    this.showProfileFlag = !this.showProfileFlag;
  }

  navigateDashBoard() {
    this.router.navigate(['/rta/dashboard']);
  }
  logout(){
    this.authService.logout();
  }
}
