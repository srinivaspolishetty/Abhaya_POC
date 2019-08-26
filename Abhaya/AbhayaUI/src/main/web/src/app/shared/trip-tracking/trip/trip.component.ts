import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TripTrackingApiService } from '../services/triptracking.api.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() trackingid;

  tradkingStatusDetails: any;

  constructor(public activeModal: NgbActiveModal, private tripTrackingApiService: TripTrackingApiService) { }

  ngOnInit() {
    this.getTrackingDetails(this.trackingid);
  }

  getTrackingDetails(trackingid) {
    this.tripTrackingApiService.getStatusInfo(trackingid).subscribe((data: any) => {
      this.tradkingStatusDetails = data.content[0];
    });
  }

}
