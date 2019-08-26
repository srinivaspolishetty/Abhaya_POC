import { Component, OnInit } from '@angular/core';
import { VehicleApiService } from '../../vehicles/services/vehicle.api.service';
import { LiveTrackingServiceAPI } from '../../livetracking/services/livetracking.api.service';

@Component({
  selector: 'app-vehicle-authreport',
  templateUrl: './vehicle-authreport.component.html',
  styleUrls: ['./vehicle-authreport.component.css']
})
export class VehicleAuthreportComponent implements OnInit {

  vehicleAuthDetails;
  authValue;
  unAuthValue;
  totalAuthCount;
  constructor(private liveTrackingServiceAPI: LiveTrackingServiceAPI,
    private vehicleApiService: VehicleApiService) { }

  ngOnInit() {
  }


  getVehicleAuthDetails(stateId, districtId, cityId, searchDate) {
    this.liveTrackingServiceAPI.getVehicleAuthDetails(stateId, districtId, searchDate).subscribe((data: any) => {
      this.vehicleAuthDetails = data;
      this.authValue = 0;
      this.unAuthValue = 0;
      this.totalAuthCount = 0;
      for (let i = 0; i < this.vehicleAuthDetails.length; i++) {
        if (this.vehicleAuthDetails[i].authType === 'Auth') {
          this.authValue = this.vehicleAuthDetails[i].count;
        } else {
          this.unAuthValue = this.vehicleAuthDetails[i].count;
        }
      }

      this.vehicleApiService.getAll(0, 10, '', districtId, cityId, '').subscribe((data: any) => {
        this.totalAuthCount = data.page.totalElements;
        this.unAuthValue = this.totalAuthCount - this.authValue;
      });

    });
  }



}
