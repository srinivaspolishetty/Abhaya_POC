import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceCommunicationServiceApi } from '../../../services/devicecommunication.api';
import { Devicecommunication } from '../../../models/devicecommunication.model';

@Component({
  selector: 'app-movementdetailsreport',
  templateUrl: './movementdetailsreport.component.html',
  styleUrls: ['./movementdetailsreport.component.css']
})
export class MovementdetailsreportComponent implements OnInit {

  movementStatus: Array<Devicecommunication> = [];
  vehicleIdel: number;
  vehicleStopped: number;
  vehicleRunning: number;
  vehicleTowing: number;
  vehicleParked: number;
  vehicleOverSpeed: number;

  constructor(private deviceCommunicationApi: DeviceCommunicationServiceApi,
    private router: Router) { }

  ngOnInit() {
  }
  navigateTomovement(status) {
    this.router.navigate(['/rta/movementdetails'], { queryParams: { movementStatus: status } });
  }

  getMovementDetails(stateId, districtId, cityId, searchDate) {
    this.deviceCommunicationApi.getMovementSummary(stateId, districtId, cityId, searchDate)
      .subscribe((data: any) => {
        this.movementStatus = data;
        console.log(this.movementStatus);
        this.vehicleIdel = 0;
        this.vehicleStopped = 0;
        this.vehicleRunning = 0;
        this.vehicleTowing = 0;
        this.vehicleParked = 0;
        this.vehicleOverSpeed = 0;
        const itemNew = this.movementStatus;
        itemNew.forEach(element => {
          if (element.statusType === 'Idling') {
            this.vehicleIdel = element.count;
          } else if (element.statusType === 'Stopped') {
            this.vehicleStopped = element.count;
          } else if (element.statusType === 'Running') {
            this.vehicleRunning = element.count;
          } else if (element.statusType === 'Towing') {
            this.vehicleTowing = element.count;
          } else if (element.statusType === 'Parked') {
            this.vehicleParked = element.count;
          } else if (element.statusType === 'Overspeed') {
            this.vehicleOverSpeed = element.count;
          }
        });
      });
  }

}
