import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  url = '/police/dashboard';
  constructor(private router: Router) {
    if (this.router.url !== '/police') {
      this.url = this.router.url;
    }
    this.router.navigate([this.url]);
   }

  ngOnInit() {
  }

}
