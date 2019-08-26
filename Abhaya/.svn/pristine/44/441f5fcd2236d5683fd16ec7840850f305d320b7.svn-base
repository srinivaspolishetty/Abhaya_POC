import { Component, OnInit } from '@angular/core';
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
  selector: 'app-devicecommunitation',
  templateUrl: './devicecommunitation.component.html',
  styleUrls: ['./devicecommunitation.component.css']
})
export class DevicecommunitationComponent implements OnInit {

  page: PageModel;
  p: number;
  searchValue: string;
  communicationDetails: Devicecommunication;
  userDetails: UserDetails;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  districtModel: string;
  cityModel: string;
  statusModel: string;
  model: NgbDateStruct;
  showSearchClear = false;
  showFilters = false;
  formatDate;

  constructor(private deviceCommunicationApi: DeviceCommunicationServiceApi, private mastersServicesApi: MastersServicesApi,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private calendar: NgbCalendar) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.model = this.calendar.getToday();
    this.page = new PageModel(0, 0, 0, 0);
    this.districtModel = '';
    this.cityModel = '';
    this.statusModel = '';
    this.searchValue = '';
  }

  ngOnInit() {
    this.statusModel = 'Communicating';
    this.getDistricts(this.userDetails.stateId);
    this.getCommunicationDetails(0, '');
  }
  refreshPage() {
    this.searchValue = '';
    this.statusModel = 'Communicating';
    this.districtModel = '';
    this.cityModel = '';
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
  statusChange() {
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
    this.deviceCommunicationApi.getCommunicationDetails(page, 10, this.statusModel, '', this.userDetails.stateId,
    this.districtModel, this.cityModel, searchvalue, this.formatDate).subscribe((data: PaginationModel) => {
      this.communicationDetails = data.content;
      this.page = data.page;
      console.log(this.communicationDetails);
    });
  }

}
