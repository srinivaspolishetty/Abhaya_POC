import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { State } from '../../util/states.model';
import { District } from '../../util/district.model';
import { City } from '../../util/city.model';
import { MastersServicesApi } from '../../util/services/masters.api';
import { PaginationModel } from '../../pagination.model';
import { Vehicle } from '../vehicle.model';
import { VehicleApiService } from '../services/vehicle.api.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  minDate = { year: 2018, month: 10, day: 1 };

  stateArray = [];

  districtArray = [];

  cityArray = [];

  formVehicle: any = {};

  submitVehicle: any = {};

  registrationDate: string;

  rcExpiryDate: string;

  vehicleArray: Array<Vehicle> = [];

  vehicle: Vehicle;

  public modelTitle: string;

  @Input() rcNumber: string;

  date: NgbDateStruct;

  isEdit: boolean;

  maxDate = this.calendar.getToday();
  constructor(public activeModal: NgbActiveModal, private calendar: NgbCalendar, private mastersServicesApi: MastersServicesApi
    , private vehicleApiService: VehicleApiService) {
    this.formVehicle.registrationDateModel = this.calendar.getToday();
    this.formVehicle.rcExpiryDateModel = this.calendar.getToday();
    this.minDate = {
      year: (this.formVehicle.registrationDateModel.year - 25), month: this.formVehicle.registrationDateModel.month,
      day: this.formVehicle.registrationDateModel.day
    };
    this.modelTitle = 'Add';
    this.formVehicle.stateId = -1;
    this.formVehicle.districtId = -1;
    this.formVehicle.cityId = -1;
  }

  ngOnInit() {
    this.getStates();
    if (this.rcNumber !== undefined) {
      this.modelTitle = 'Edit';
      this.isEdit = true;
      this.getVehicles(0, this.rcNumber);
    }
  }

  onStateChange(state_id) {
    if (state_id > 0) {
      this.getDistricts(state_id);
      this.formVehicle.districtId = -1;
      this.formVehicle.cityId = -1;
      this.cityArray = [];
    } else {
      this.districtArray = [];
      this.cityArray = [];
    }
  }
  onDistrictChange(district_id) {
    if (district_id > 0) {
      this.getCities(district_id);
      this.formVehicle.cityId = -1;
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

  getVehicles(page: number, searchValue: string) {
    this.vehicleApiService.getAll(page, 10, searchValue, '', '', '').subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
      this.vehicle = this.vehicleArray[0];
      console.log(this.vehicle);
      this.getStates();
      this.getDistricts(this.vehicle.stateId);
      this.getCities(this.vehicle.districtId);
      this.convertVehicleToForm();
    });
  }

  convertVehicleToForm() {
    this.formVehicle.id = this.vehicle.vehicleId;
    this.formVehicle.vehicleId = this.vehicle.vehicleId;
    this.formVehicle.rcNumber = this.vehicle.rcNumber;
    this.formVehicle.ownerName = this.vehicle.ownerName;
    this.formVehicle.stateId = this.vehicle.stateId;
    this.formVehicle.cityId = this.vehicle.cityId;
    this.formVehicle.vehicleName = this.vehicle.vehicleName;
    this.formVehicle.ownerContactNumber = this.vehicle.ownerContactNumber;
    this.formVehicle.districtId = this.vehicle.districtId;
    this.formVehicle.registrationDate = this.vehicle.registrationDate;
    this.formVehicle.rcExpiryDate = this.vehicle.rcExpiryDate;
    this.date = new NgbDate(Number(this.formVehicle.registrationDate.split('/')[2]),
      Number(this.formVehicle.registrationDate.split('/')[1]),
      Number(this.formVehicle.registrationDate.split('/')[0]));
    this.formVehicle.registrationDateModel = this.date;
    this.date = new NgbDate(Number(this.formVehicle.rcExpiryDate.split('/')[2]),
      Number(this.formVehicle.rcExpiryDate.split('/')[1]),
      Number(this.formVehicle.rcExpiryDate.split('/')[0]));
    this.formVehicle.rcExpiryDateModel = this.date;
    console.log('In Convert' + JSON.stringify(this.formVehicle));
  }

  onSubmit() {
    this.registrationDate = this.formVehicle.registrationDateModel.day + '/' + this.formVehicle.registrationDateModel.month
      + '/' + this.formVehicle.registrationDateModel.year;
    this.rcExpiryDate = this.formVehicle.rcExpiryDateModel.day + '/' + this.formVehicle.rcExpiryDateModel.month
      + '/' + this.formVehicle.rcExpiryDateModel.year;
    this.formVehicle['registrationDate'] = this.registrationDate;
    this.formVehicle['rcExpiryDate'] = this.rcExpiryDate;
    Object.assign(this.submitVehicle, this.formVehicle);
    delete this.submitVehicle.registrationDateModel;
    delete this.submitVehicle.rcExpiryDateModel;
    // if (!this.isEdit) {
    this.submitVehicle.isOwner = true;
    // }
    this.vehicleApiService.createVehicle(JSON.stringify(this.submitVehicle)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }

}
