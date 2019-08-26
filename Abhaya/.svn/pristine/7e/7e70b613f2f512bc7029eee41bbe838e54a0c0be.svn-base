import { Component, OnInit } from '@angular/core';
import { DeviceCommunicationServiceApi } from '../../../services/devicecommunication.api';
import { Devicecommunication } from '../../../models/devicecommunication.model';
import { PieChart } from '../../util/piechart';


@Component({
  selector: 'app-movementgraphreport',
  templateUrl: './movementgraphreport.component.html',
  styleUrls: ['./movementgraphreport.component.css']
})
export class MovementgraphreportComponent implements OnInit {


  movementStatus: Array<Devicecommunication> = [];
  vehicleIdel: number;
  vehicleStopped: number;
  vehicleRunning: number;
  vehicleTowing: number;
  vehicleParked: number;
  vehicleOverSpeed: number;

  pieChart: PieChart = new PieChart([400, 280], true, false, false, true, false, 'below', '0.30', '');
  constructor(private deviceCommunicationApi: DeviceCommunicationServiceApi) {
    this.pieChart.colorScheme = { domain: ['#003f5c', '#ff0000', '#00ff00', '#ffa600', '#bc5090', '#7f0000'] };
  }

  ngOnInit() {
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
          }  else if (element.statusType === 'Running') {
            this.vehicleRunning = element.count;
          } else if (element.statusType === 'Towing') {
            this.vehicleTowing = element.count;
          } else if (element.statusType === 'Parked') {
            this.vehicleParked = element.count;
          } else if (element.statusType === 'Overspeed') {
            this.vehicleOverSpeed = element.count;
          }
        });
        this.pieChart.data = [
          { 'name': 'Idling', 'value': this.vehicleIdel },
          { 'name': 'Stopped', 'value': this.vehicleStopped },
          { 'name': 'Running', 'value': this.vehicleRunning },
          { 'name': 'Towing', 'value': this.vehicleTowing },
          { 'name': 'Parked', 'value': this.vehicleParked },
          { 'name': 'Over Speed', 'value': this.vehicleOverSpeed },
        ];
      });
  }

}
