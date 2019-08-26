import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { UserDetails } from '../../login/userdetails.model';
import { PaginationModel } from '../pagination.model';
import { UserApiService } from './services/user.api.service';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { PageModel } from '../page.model';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  public userDetails: Array<UserDetails> = [];
  searchValue = '';
  public showSearchClear = false;
  districtModel: any;
  cityModel: any;

  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  showFilters = false;
  userDetail: UserDetails;
  public page: PageModel;
  public p: number;
  constructor(private modalService: NgbModal, private userApiService: UserApiService, private mastersServicesApi: MastersServicesApi) {
    this.page = new PageModel(0, 0, 0, 0);
    this.districtModel = '';
    this.cityModel = '';
    this.userDetail = JSON.parse(localStorage.getItem('userdetails'));
  }

  ngOnInit() {
    this.getDistricts(this.userDetail.stateId);
    this.getUsers(0, this.searchValue, this.districtModel, this.cityModel);
  }
  refreshPage() {
    this.districtModel = '';
    this.searchValue = '';
    this.cityModel = '';
    this.getUsers(0, this.searchValue, this.districtModel, this.cityModel);
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  getUsers(page: number, searchValue: string, districtId: string, cityId: string) {
    this.userApiService.getUsers(page, 10, searchValue, districtId, cityId).subscribe((data: PaginationModel) => {
      this.userDetails = data.content;
      this.page = data.page;
    });
  }
  searchData() {
    if (this.searchValue !== undefined) {
      this.getUsers(0, this.searchValue, this.districtModel, this.cityModel);
      this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    }
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
    this.getUsers(0, this.searchValue, this.districtModel, this.cityModel);
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }
  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }
  openModal(userDetails: UserDetails) {
    const modalRef = this.modalService.open(UserComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.editUserDetails = userDetails;
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        this.getUsers(0, this.searchValue, this.districtModel, this.cityModel);
      }
    });
  }

}
