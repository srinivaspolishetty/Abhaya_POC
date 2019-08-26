import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Driver } from '.././driver.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DriverDutyApiService } from '../../driver-duty/services/driverduty.api.service';
import { DriverDuty } from '../../driver-duty/driverDuty.model';
import { NgbDateFRParserFormatter } from '../../util/dateformatter';
import { PaginationModel } from '../../pagination.model';

@Component({
  selector: 'app-driverdetailsview',
  templateUrl: './driverdetailsview.component.html',
  styleUrls: ['./driverdetailsview.component.css']
})
export class DriverdetailsviewComponent implements OnInit {

  @Input() selectDriverDetails;
  driverDutyArray: Array<DriverDuty> = [];
  driverImage: string;
  driverdata: Driver;
  validImage = false;
  noAuthData = false;
  model: NgbDateStruct;
  constructor(public activeModal: NgbActiveModal, private driverDutyApiService: DriverDutyApiService, private calendar: NgbCalendar,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.model = this.calendar.getToday();
  }
  ngOnInit() {
    this.driverdata = this.selectDriverDetails;
    if (this.driverdata.image === undefined) {
      this.validImage = false;
    } else {
      this.validImage = true;
      this.driverImage = 'data:image/jpeg;base64,' + this.driverdata.image;
    }
    this.getDriverDuties(this.driverdata.dlNumber);
  }


  getDriverDuties(searchValue: string, ) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.driverDutyApiService.getAll(0, '', formatDate, searchValue, '', '').subscribe((data: PaginationModel) => {
      this.driverDutyArray = data.content;
      this.noAuthData = (this.driverDutyArray.length === 0);
    });
  }


}
