import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TripDetailsApiService } from '../services/tripdetails.api.service';
import { TripDetails } from '../tripdetails.model';
import { environment } from '../../../../environments/environment';
import { DriverApiService } from '../../drivers/services/driver.api.service';
import { Driver } from '../../drivers/driver.model';
import { PaginationModel } from '../../../shared/pagination.model';

@Component({
  selector: 'app-opentrips',
  templateUrl: './opentrips.component.html',
  styleUrls: ['./opentrips.component.css']
})
export class OpentripsComponent implements OnInit {

  isClosedTrip = false;

  template = '';
  isDriver = false;
  noImage = false;
  tripId: number;
  driverImage: string;
  public driveArray: Array<Driver> = [];
  renderOpts = {
    suppressMarkers: true,
  };
  tripDetailsArray: Array<TripDetails> = [];
  constructor(private driverApiService: DriverApiService, private router: Router, private activatedRoute: ActivatedRoute,
    private tripDetailsApiService: TripDetailsApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.tripId = params['tripId'];
      const rcNumber = params['rcNumber'];
      const citizenMobileNumber = params['citizenMobileNumber'];
      this.template = `${environment.apiBase}?vehicleNumber=${rcNumber}&citizenMobileNumber=${citizenMobileNumber}&isShared=true`;
      // this.template = `http://111.93.16.251:8099?vehicleNumber=${rcNumber}&citizenMobileNumber=${citizenMobileNumber}&isShared=true`;
      this.getTripDetails();
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
