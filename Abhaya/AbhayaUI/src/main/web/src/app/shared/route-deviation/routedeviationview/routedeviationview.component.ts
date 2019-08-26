import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-routedeviationview',
  templateUrl: './routedeviationview.component.html',
  styleUrls: ['./routedeviationview.component.css']
})
export class RoutedeviationviewComponent implements OnInit {

  @Input() routeDetails;
  showData = true;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
      this.showData = !(this.routeDetails === undefined)
  }

}
