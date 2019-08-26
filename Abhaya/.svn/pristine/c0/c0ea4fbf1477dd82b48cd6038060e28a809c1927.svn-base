import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TripTrackingDetails } from '../triptrackingdetails.model';
import { TripDetailsApiService } from '../services/tripdetails.api.service';
import { TripDetails } from '../tripdetails.model';
import { PaginationModel } from '../../pagination.model';
import { DriverApiService } from '../../drivers/services/driver.api.service';
import { Driver } from '../../drivers/driver.model';

@Component({
  selector: 'app-closed-trips',
  templateUrl: './closed-trips.component.html',
  styleUrls: ['./closed-trips.component.css']
})
export class ClosedTripsComponent implements OnInit {

  origin: any;
  destination: any;

  lat = 51.678418;

  lng = 7.809007;
  originstr: string;
  destinationstr: string;

  tripId: number;
  isDriver = false;
  tripDetailsArray: Array<TripDetails> = [];
  public driveArray: Array<Driver> = [];
  noImage = false;
  driverImage: string;
  renderOpts = { suppressMarkers: true };

  markerOpts = {
    origin: { icon: '../../../assets/images/source.png' },
    destination: { icon: '../../../assets/images/dest.png', label: 'marker label', opacity: 0.8 }
  };

  waypoints = [];

  public tripTrackingDetails: Array<TripTrackingDetails> = [];
  constructor(private driverApiService: DriverApiService, private router: Router, private activatedRoute: ActivatedRoute,
    private tripDetailsApiService: TripDetailsApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.tripId = params['tripId'];
      this.originstr = params['origin'];
      this.destinationstr = params['destination'];
      this.getTripTrackingDetails();
      this.getTripDetails();
      this.origin = { lat: Number(this.originstr.split(',')[0]), lng: Number(this.originstr.split(',')[1]) };
      this.destination = { lat: Number(this.destinationstr.split(',')[0]), lng: Number(this.destinationstr.split(',')[1]) };
    });
  }

  openPanicAlerts() {
    this.router.navigate(['/police/panicalerts']);
  }
  toggleDriver(isDriver: boolean) {
    this.isDriver = isDriver;
  }
  getTripDetails() {
    this.tripDetailsApiService.getTripDetails(this.tripId).subscribe((data: TripDetails) => {
      this.tripDetailsArray.push(data);
      this.getDrivers(0, this.tripDetailsArray[0].dlNumber, '', '');
    });
  }
  getTripTrackingDetails() {
    this.tripDetailsApiService.getTripTrackingDetails(this.tripId).subscribe((data: PaginationModel) => {
      this.tripTrackingDetails = data.content;
      let loop: number;
      for (loop = 0; loop < this.tripTrackingDetails.length; loop++) {
        this.waypoints.push({
          location: { lat: this.tripTrackingDetails[loop].latitude, lng: this.tripTrackingDetails[loop].langitude },
          stopover: false
        });
      }
    });
  }


  getDrivers(page: number, searchValue: string, districtId: string, cityId: string) {
    this.driverApiService.getAll(page, 10, searchValue, districtId, cityId).subscribe((data: PaginationModel) => {
      this.driveArray = data.content;
      if (this.driveArray[0].image === undefined) {
        this.noImage = true;
      } else {
        this.noImage = false;
        this.driverImage = 'data:image/jpeg;base64,' + this.driveArray[0].image;
      }
      console.log(this.driveArray);
    });
  }
}
