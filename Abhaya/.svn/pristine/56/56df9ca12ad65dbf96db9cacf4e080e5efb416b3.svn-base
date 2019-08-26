import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from './message.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private stompClient = null;

  public msgs: Array<Message> = [];

  disabled = true;
  url = '/rta/livetracking';
  constructor(private router: Router) {
    if (this.router.url !== '/rta') {
      this.url = this.router.url;
    }
    this.router.navigate([this.url]);
   }

   setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.msgs = [];
    }
  }

  ngOnInit() {
    this.connect();
  }

  connect() {
    const socket = new SockJS(`${environment.apiBase}/distress`);
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/topic/messages', function (hello) {
          const message = new Message();
          message.msg = hello.body;
          message.isMobile = (hello.body.split(',')[1] === 'MOBILE');
        _this.msgs.push(message);
      });
    });
  }

  openPanicAlerts(isMobile) {
    this.msgs = [];
    if (isMobile) {
      if (this.router.url === '/rta/showvideo') {
        this.router.navigate(['/rta/showvideos']);
      } else {
        this.router.navigate(['/rta/showvideo']);
      }
    } else {
      this.router.navigate(['/rta/panicalertslist']);
    }
  }

}
