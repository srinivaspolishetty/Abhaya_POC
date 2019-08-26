import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceCommunicationServiceApi } from '../../services/devicecommunication.api';
import { Devicecommunication } from '../../models/devicecommunication.model';
import { PaginationModel } from '../pagination.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../../shared/util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { PageModel } from '../page.model';
import { NgbDateFRParserFormatter } from '../../shared/util/dateformatter';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-movementdetails',
  templateUrl: './movementdetails.component.html',
  styleUrls: ['./movementdetails.component.css']
})
export class MovementdetailsComponent implements OnInit {

  page: PageModel;
  p: number;
  searchValue: string;
  communicationDetails:  Array<Devicecommunication> = [];
  userDetails: UserDetails;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  districtModel: string;
  cityModel: string;
  statusModel: string;
  movementModel: string;
  model: NgbDateStruct;
  showSearchClear = false;
  showFilters = false;
  formatDate;
  constructor(private deviceCommunicationApi: DeviceCommunicationServiceApi, private mastersServicesApi: MastersServicesApi,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private calendar: NgbCalendar,
    private activatedRoute: ActivatedRoute) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.model = this.calendar.getToday();
    this.page = new PageModel(0, 0, 0, 0);
    this.searchValue = '';
    this.districtModel = '';
    this.cityModel = '';
    this.statusModel = '';
    this.movementModel = '';
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const statusFromParams = params['movementStatus'];
      this.movementModel = statusFromParams !== undefined ? statusFromParams : '';
    });

    this.statusModel = 'Communicating';
    this.getDistricts(this.userDetails.stateId);
    this.getCommunicationDetails(0, '');
  }
  refreshPage() {
    this.searchValue = '';
    this.movementModel = '';
    this.statusModel = 'Communicating';
    this.districtModel = '';
    this.cityModel = '';
    this.cityArray = [];
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getCommunicationDetails(0, '');
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  searchData() {
    if (this.searchValue !== undefined) {
      this.getCommunicationDetails(0, this.searchValue);
      this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    }
    this.getCommunicationDetails(0, this.searchValue);
  }
  movementChange() {
    this.getCommunicationDetails(0, this.searchValue);
  }
  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }
  changeDate() {
    this.getCommunicationDetails(0, this.searchValue);
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
    this.getCommunicationDetails(0, this.searchValue);
  }

  citychange() {
    this.getCommunicationDetails(0, this.searchValue);
  }
  pageChanged(event) {
    this.p = event;
    console.log(event);
    this.getCommunicationDetails(this.p - 1, this.searchValue);
  }
  getCommunicationDetails(page, searchvalue) {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.deviceCommunicationApi.getCommunicationDetails(page, 10, this.statusModel, this.movementModel,
      this.userDetails.stateId, this.districtModel, this.cityModel, searchvalue, this.formatDate)
      .subscribe((data: PaginationModel) => {
        this.communicationDetails = data.content;
        this.page = data.page;
        console.log(this.communicationDetails);
      });
  }

}
