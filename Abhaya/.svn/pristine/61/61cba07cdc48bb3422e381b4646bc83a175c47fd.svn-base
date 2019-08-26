import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuspiciousVehicleComponent } from './suspicious-vehicle/suspicious-vehicle.component';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
import { PageModel } from '../page.model';
import { SuspiciousVehicleServiceApi } from '../../services/suspiciousvehicle.api';
import { ToasterService } from '../util/toaster.service';

@Component({
  selector: 'app-suspicious-vehicles',
  templateUrl: './suspicious-vehicles.component.html',
  styleUrls: ['./suspicious-vehicles.component.css']
})
export class SuspiciousVehiclesComponent implements OnInit {
  vehicleDetails = [];
  page: PageModel;
  p: number;
  showFilters = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;

  constructor(private modalService: NgbModal, private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar
    , private ngbDateFRParserFormatter: NgbDateFRParserFormatter,
    private SuspiciousVehicleService: SuspiciousVehicleServiceApi,
    private toasterService: ToasterService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.page = new PageModel(0, 0, 0, 0);
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.getAllVehicles(0);
  }


  refreshPage() {
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
  }

  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  getDistricts(value) {
    if (value === '') {
      this.districtArray = [];
    }
    this.districtModel = '';
    this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
      this.districtArray = data;
    });
  }

  getCities(value) {
    this.cityModel = '';
    if (value === '') {
      this.cityArray = [];
    }
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }

  addSuspiciousVehicle() {
    const modalRef = this.modalService.open(SuspiciousVehicleComponent, {
      windowClass: 'popup_alignment_dashBoard', backdrop: 'static',
      keyboard: false
    });
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        this.getAllVehicles(0);
      }
    }).catch((error) => {
    });
  }

  pageChanged(event) {
    this.p = event;
    this.getAllVehicles(this.p - 1);
  }

  removeSuspiciousVehicle(vehicle) {
    this.SuspiciousVehicleService.removeSuspiciousVehicle(vehicle.watchId)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllVehicles(0);
        this.toasterService.showSuccess('bottom-right',
        'Successfully removed Vehicle Number : ' + vehicle.rcNumber + ' from Suspicious Vehicles List.');
      }, error => {
        console.log('Error', error);
        this.toasterService.showError('bottom-right',
        'Unable to remove Vehicle Number: ' + vehicle.rcNumber + ' from Suspicious Vehicles List.');
      });
  }
  getAllVehicles(page: number) {
    this.mastersServicesApi.getAllSuspiciousVehicles(page, 10).subscribe((data: any) => {
      this.vehicleDetails = data.content;
      this.page = data.page;
    });
  }

}
