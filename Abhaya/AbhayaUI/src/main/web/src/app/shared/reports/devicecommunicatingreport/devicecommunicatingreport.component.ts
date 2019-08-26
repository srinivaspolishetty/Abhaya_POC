import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersServicesApi } from '../../util/services/masters.api';
import { DeviceCommunicationServiceApi } from '../../../services/devicecommunication.api';
import { PaginationModel } from '../../pagination.model';
import { Devicecommunication } from '../../../models/devicecommunication.model';

@Component({
  selector: 'app-devicecommunicatingreport',
  templateUrl: './devicecommunicatingreport.component.html',
  styleUrls: ['./devicecommunicatingreport.component.css']
})
export class DevicecommunicatingreportComponent implements OnInit {

  totalVehicleinstalled;
  devicecommunicationdata: Array<Devicecommunication> = [];
  ignitionOn: number;
  ignitionOff: number;
  onBattery: number;
  deviceSummaryDetails: number;
  totalVehicleNotCommunicating;
  isShow = false;

  constructor(private mastersServicesApi: MastersServicesApi,
    private deviceCommunicationApi: DeviceCommunicationServiceApi,
    private router: Router) { }

  ngOnInit() {
  }
  navigateTocommunication() {
    this.router.navigate(['/rta/devicecommunitation']);
  }

  getallmodemdetails(showDiv, stateId, districtId, cityId, searchDate, page, searchString) {
    this.isShow = showDiv;
    this.totalVehicleinstalled = 0;
    this.mastersServicesApi.getModemData(page, 10, searchString, '', districtId).subscribe((data: PaginationModel) => {
      this.totalVehicleinstalled = data.page.totalElements;
      this.getCommunicationDetails(0, '', stateId, districtId, cityId, searchDate);
      this.getdevicecommSummary(stateId, districtId, cityId, searchDate);
    });
  }

  getdevicecommSummary(stateId, districtId, cityId, searchDate) {
    this.deviceCommunicationApi.getDeviceCommunicationSummary(stateId, districtId, cityId, searchDate)
      .subscribe((data: any) => {
        this.deviceSummaryDetails = 0;
        this.totalVehicleNotCommunicating = 0;
        if (!(data === undefined || data == null || data === '' || data.length === 0)) {
          this.deviceSummaryDetails = data[0].count;
          this.totalVehicleNotCommunicating = this.totalVehicleinstalled - this.deviceSummaryDetails;
        }
      });
  }

  getCommunicationDetails(page, searchvalue, stateId, districtId, cityId, searchDate) {
    this.deviceCommunicationApi.getCommunicationDetails(page, 10, 'Communicating', '', stateId, districtId, cityId, searchvalue, searchDate)
      .subscribe((data: PaginationModel) => {
        this.devicecommunicationdata = data.content;
        this.ignitionOn = 0;
        this.ignitionOff = 0;
        this.onBattery = 0;
        const itemNew = this.devicecommunicationdata;
        itemNew.forEach(element => {
          if (element.ignitionStatus === 'ON') {
            this.ignitionOn++;
          }
          if (element.ignitionStatus === 'OFF') {
            this.ignitionOff++;
          }
          if (element.batteryStatus === 'Low') {
            this.onBattery++;
          }
        });

      });
  }


}
