import { Component, OnInit, Input } from '@angular/core';
import { TripDetails } from '../tripdetails.model';
import { TripDetailsApiService } from '../services/tripdetails.api.service';

@Component({
  selector: 'app-trip-vehicle-details',
  templateUrl: './trip-vehicle-details.component.html',
  styleUrls: ['./trip-vehicle-details.component.css']
})
export class TripVehicleDetailsComponent implements OnInit {

  tripDetailsArray: Array<TripDetails> = [];

  @Input() tripId: string;
  constructor( private tripDetailsApiService: TripDetailsApiService) {
    console.log(this.tripId);
  }

  ngOnInit() {
    this.getTripDetails();
  }

  getTripDetails() {
    this.tripDetailsApiService.getTripDetails(this.tripId).subscribe((data: TripDetails) => {
      this.tripDetailsArray.push(data);
    });
  }

}
