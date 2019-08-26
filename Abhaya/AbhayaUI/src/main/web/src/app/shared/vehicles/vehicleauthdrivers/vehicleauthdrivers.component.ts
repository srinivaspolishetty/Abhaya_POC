import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModel } from '../../pagination.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DriverDutyApiService } from '../../driver-duty/services/driverduty.api.service';
import { DriverDuty } from '../../driver-duty/driverDuty.model';
import { Driver } from '../../drivers/driver.model';
import { NgbDateFRParserFormatter } from '../../util/dateformatter';
import { DriverApiService } from '../../drivers/services/driver.api.service';

@Component({
  selector: 'app-vehicleauthdrivers',
  templateUrl: './vehicleauthdrivers.component.html',
  styleUrls: ['./vehicleauthdrivers.component.css']
})
export class VehicleauthdriversComponent implements OnInit {

  @Input() selectedVehicle;
  vehicleSerialNo: string;
  model: NgbDateStruct;
  noAuthData = false;
  driverDutyArray: Array<DriverDuty> = [];
  driveArray: Array<Driver> = [];
  driversList = [];
  constructor(public activeModal: NgbActiveModal, private calendar: NgbCalendar, private driverDutyApiService: DriverDutyApiService,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private driverApiService: DriverApiService) {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this.vehicleSerialNo = this.selectedVehicle.serialNumber;
    this.getDriverDuties(this.vehicleSerialNo);
  }

  getDriverDuties(searchValue: string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.driverDutyApiService.getAll(0, '', formatDate, searchValue, '', '').subscribe((data: PaginationModel) => {
      this.driverDutyArray = data.content;
      if (this.driverDutyArray.length === 0) {
        this.noAuthData = true;
      } else {
        this.noAuthData = false;
        this.driverDutyArray.forEach(element => {
          this.getDrivers(element.dlNumber);
        });
      }
    });
  }

  getDrivers(searchValue: string) {
    this.driverApiService.getAll(0, '', searchValue, '', '').subscribe((data: PaginationModel) => {
      data.content[0].image = 'data:image/jpeg;base64,' + data.content[0].image;
      this.driveArray = data.content[0];
      this.driversList.push(this.driveArray);
    });
  }

}
