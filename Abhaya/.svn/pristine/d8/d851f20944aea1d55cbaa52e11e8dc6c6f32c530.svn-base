import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { State } from '../../util/states.model';
import { District } from '../../util/district.model';
import { City } from '../../util/city.model';
import { MastersServicesApi } from '../../util/services/masters.api';
import { PaginationModel } from '../../pagination.model';
import { Driver } from '../driver.model';
import { DriverApiService } from '../services/driver.api.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  minDate = { year: 2018, month: 10, day: 1 };

  maxDate = { year: 2018, month: 10, day: 1 };

  stateArray = [];

  districtArray = [];

  cityArray = [];

  formDriver: any = {};

  submitDriver: any = {};

  driverArray: Array<Driver> = [];

  driver: Driver;

  dlExpiryDate: string;

  public modelTitle: string;

  @Input() dlNumber: string;

  date: NgbDateStruct;

  isEdit: boolean;

  districtModel: any;
  cityModel: any;

  constructor(public activeModal: NgbActiveModal, private calendar: NgbCalendar, private mastersServicesApi: MastersServicesApi
    , private driverApiService: DriverApiService) {
    this.formDriver.dlExpiryDateModel = this.calendar.getToday();
    this.minDate = {
      year: (this.formDriver.dlExpiryDateModel.year - 25), month: this.formDriver.dlExpiryDateModel.month,
      day: this.formDriver.dlExpiryDateModel.day
    };
    this.maxDate = {
      year: (this.formDriver.dlExpiryDateModel.year + 25), month: this.formDriver.dlExpiryDateModel.month,
      day: this.formDriver.dlExpiryDateModel.day
    };
    this.modelTitle = 'Add';
    this.formDriver.stateId = -1;
    this.formDriver.districtId = -1;
    this.formDriver.cityId = -1;
    this.getStates();
    // this.getDistricts();
    // this.getCities();
    this.districtModel = '';
    this.cityModel = '';
  }

  ngOnInit() {
    if (this.dlNumber !== undefined) {
      this.modelTitle = 'Edit';
      this.isEdit = true;
      this.getDrivers(0, this.dlNumber);
    }
  }

  onStateChange(state_id) {
    if (state_id > 0) {
      this.formDriver.districtId = -1;
      this.formDriver.cityId = -1;
      this.getDistricts(state_id);
      this.cityArray = [];
    } else {
      this.formDriver.districtId = -1;
      this.formDriver.cityId = -1;
      this.districtArray = [];
      this.cityArray = [];
    }

  }
  onDistrictChange(district_id) {
    if (district_id > 0) {
      this.getCities(district_id);
      this.formDriver.cityId = -1;
    } else {
      this.cityArray = [];
    }

  }

  getStates() {
    this.mastersServicesApi.getStates().subscribe((data: State[]) => {
      this.stateArray = data;
    });
  }

  getDistricts(value) {
    this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
      this.districtArray = data;
    });
  }

  getCities(value) {
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }

  getDrivers(page: number, searchValue: string) {
    this.driverApiService.getAll(page, 10, searchValue, this.districtModel, this.cityModel).subscribe((data: PaginationModel) => {
      this.driverArray = data.content;
      this.driver = this.driverArray[0];
      console.log(this.driver);
      this.getStates();
      this.getDistricts(this.driver.stateId);
      this.getCities(this.driver.districtId);
      this.convertDriverToForm();
    });
  }

  convertDriverToForm() {
    this.formDriver.id = this.driver.driverId;
    this.formDriver.driverId = this.driver.driverId;
    this.formDriver.driverName = this.driver.driverName;
    this.formDriver.gender = this.driver.gender;
    this.formDriver.contactNumber = this.driver.contactNumber;
    this.formDriver.dlNumber = this.driver.dlNumber;
    this.formDriver.dlExpiryDate = this.driver.dlExpiryDate;
    this.formDriver.stateId = this.driver.stateId;
    this.formDriver.cityId = this.driver.cityId;
    this.formDriver.districtId = this.driver.districtId;
    this.formDriver.rfId = this.driver.rfId;
    this.date = new NgbDate(Number(this.formDriver.dlExpiryDate.split('/')[2]),
      Number(this.formDriver.dlExpiryDate.split('/')[1]),
      Number(this.formDriver.dlExpiryDate.split('/')[0]));
    this.formDriver.dlExpiryDateModel = this.date;
    console.log('In Convert' + JSON.stringify(this.formDriver));
  }

  onSubmit() {
    //  alert(JSON.stringify(this.formDriver));
    this.dlExpiryDate = this.formDriver.dlExpiryDateModel.day + '/' + this.formDriver.dlExpiryDateModel.month
      + '/' + this.formDriver.dlExpiryDateModel.year;
    this.formDriver['dlExpiryDate'] = this.dlExpiryDate;
    Object.assign(this.submitDriver, this.formDriver);
    delete this.submitDriver.dlExpiryDateModel;
    if (!this.isEdit) {
      this.submitDriver.isOwner = true;
    }
    this.driverApiService.createDriver(JSON.stringify(this.submitDriver)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }

  omitSpecialChar(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || (k >= 48 && k <= 57));
  }

  onlyAllowNumbers(event) {
    let k;
    k = event.charCode;
    return ((k >= 48 && k <= 57));
  }
}
