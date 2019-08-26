import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PanicAlert } from '../panicalert.model';
import { PanicApiService } from '../services/panic.alert.services';
import { PaginationModel } from '../../pagination.model';
import { environment } from '../../../../environments/environment';
import { TripDetailsApiService } from '../../trip-details/services/tripdetails.api.service';
import { TripDetails } from '../../trip-details/tripdetails.model';
import { DriverApiService } from '../../drivers/services/driver.api.service';
import { Driver } from '../../drivers/driver.model';
import { TripTrackingDetails } from '../../trip-details/triptrackingdetails.model';

@Component({
  selector: 'app-panic-alert',
  templateUrl: './panic-alert.component.html',
  styleUrls: ['./panic-alert.component.css']
})
export class PanicAlertComponent implements OnInit {

  lat = 16.505329;
  lng = 80.661209;
  origin: any;
  destination: any;
  originstr: string;
  destinationstr: string;
  renderOpts = { suppressMarkers: true };
  waypoints = [];
  markerOpts = {
    origin: { icon: '../../../assets/images/source.png' },
    destination: { icon: '../../../assets/images/dest.png', label: 'marker label', opacity: 0.8 }
  };

  tripId: number;
  distressId: number;
   template = '';
   isClosed = false;
  panicAlertArray: Array<PanicAlert> = [];
  tripDetailsArray: Array<TripDetails> = [];
  public driveArray: Array<Driver> = [];
  driverImage: string;
  noImage = false;
  isDriver = false;
  public tripTrackingDetails: Array<TripTrackingDetails> = [];
  constructor(private router: Router, private driverApiService: DriverApiService, private activatedRoute: ActivatedRoute,
    private panicApiService: PanicApiService, private tripDetailsApiService: TripDetailsApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const rcNumber = params['rcNumber'];
      this.distressId = params['distressId'];
      this.tripId = params['tripId'];
      const citizenMobileNumber = params['citizenMobileNumber'];
      this.template = `${environment.apiBase}?vehicleNumber=${rcNumber}&citizenMobileNumber=${citizenMobileNumber}&isShared=true`;
      this.getTripDetails(this.tripId);
      this.originstr =  params['orgin'];
      this.destinationstr =  params['destination'];
      console.log(this.originstr);
      console.log(this.destinationstr);
      this.getTripTrackingDetails();
      this.origin = { lat: Number(this.originstr.split(',')[0]), lng: Number(this.originstr.split(',')[1]) };
      this.destination = { lat: Number(this.destinationstr.split(',')[0]), lng: Number(this.destinationstr.split(',')[1]) };
    });
  }

  toggleDriver(isDriver: boolean) {
    this.isDriver = isDriver;
  }
  getTripDetails(tripID) {
    this.tripDetailsApiService.getTripDetails(tripID).subscribe((data: TripDetails) => {
      this.tripDetailsArray.push(data);
      this.getDrivers(0, this.tripDetailsArray[0].dlNumber, '', '');
    });
  }

  panicStatusChanged(panicAlert) {
    this.panicApiService.updatePanicAlert(panicAlert.distressId).subscribe((data: any) => {
      this.router.navigate(['/rta/panicalertslist']);
    }, error => {
      console.log('Error', error);
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

}
