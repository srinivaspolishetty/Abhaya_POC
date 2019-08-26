import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanicAlert } from './panicalert.model';
import { PageModel } from '../page.model';
import { PanicApiService } from './services/panic.alert.services';
import { PaginationModel } from '../pagination.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../util/dateformatter';

@Component({
  selector: 'app-panic-alerts-list',
  templateUrl: './panic-alerts-list.component.html',
  styleUrls: ['./panic-alerts-list.component.css']
})
export class PanicAlertsListComponent implements OnInit {

  public panicAlertArray: Array<PanicAlert> = [];
  public page: PageModel;
  public p: number;
  searchValue;
  public showSearchClear = false;
  isClosed = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;
  maxDate = this.calendar.getToday();
  eventType: string;
  panicAlertBreadCrum: string;
  showFilters = false;
  formatDate: string;
  panicstatus: string;

  constructor(private router: Router, private panicApiService: PanicApiService, private mastersServicesApi: MastersServicesApi,
    private calendar: NgbCalendar, private activatedRoute: ActivatedRoute,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
    this.eventType = '';
    this.searchValue = '';
    this.panicAlertBreadCrum = 'Panic Alerts List';
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.eventType = params['eventType'] !== undefined ? params['eventType'] : '';
      this.panicstatus = params['isClosed'];
      if (this.panicstatus !== undefined && this.panicstatus === 'true') {
        this.isClosed = true;
      } else {
        this.isClosed = false;
      }
      if (this.eventType === 'WEB') {
        this.panicAlertBreadCrum = 'Panic Alerts Mobile List';
      }
      if (this.eventType === 'MOBILE') {
        this.panicAlertBreadCrum = 'Panic Alerts Video List';
      }
    });
    this.getDistricts(this.userDetails.stateId);
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }
  refreshPage() {
    this.districtModel = '';
    this.cityModel = '';
    this.searchValue = '';
    this.model = this.calendar.getToday();
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
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
    } else {
      this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
        this.cityArray = data;
      });
    }
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }
  getCitiesPanicAlerts(value) {
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getPanicAlerts(0, this.searchValue, this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }
  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }
  changeDate() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getPanicAlerts(0, this.searchValue, this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }

  openPanicAlerts(panicAlert) {
    this.router.navigate(['/rta/panicalert'], {
      queryParams: {
        distressId: panicAlert.distressId, tripId: panicAlert.tripId,
        rcNumber: panicAlert.rcNumber, citizenMobileNumber: panicAlert.citizenMobileNumber,
        orgin: panicAlert.sourceLatLang, destination: panicAlert.destiLatLang
      }, queryParamsHandling: 'merge'
    });
  }

  changepanic(value) {
    this.isClosed = value;
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }

  pageChanged(event) {
    this.p = event;
    this.getPanicAlerts(this.p - 1, this.searchValue, this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }
  getPanicAlerts(page: number, searchValue: string, isClosed: boolean, districtId: string, cityId: string,
    eventType: string, searchDate: string) {
    this.isClosed = isClosed;
    this.panicApiService.getAll(page, 10, searchValue, isClosed, districtId, cityId, eventType, searchDate)
      .subscribe((data: PaginationModel) => {
        this.panicAlertArray = data.content;
        this.page = data.page;
      });
  }
  panicStatusChanged(panicAlert) {
    this.panicApiService.updatePanicAlert(panicAlert.distressId).subscribe((data: any) => {
    }, error => {
      console.log('Error', error);
    });
    this.getPanicAlerts(0, '', this.isClosed, this.districtModel, this.cityModel, this.eventType, this.formatDate);
  }
}
