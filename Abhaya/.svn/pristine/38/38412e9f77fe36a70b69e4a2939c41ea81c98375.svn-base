import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdministrativeComponent } from './administrative/administrative.component';
import { AdministrativeServiceapi } from './services/administrative.api.service';
import { UserDetails } from '../../login/userdetails.model';
import { State } from '../util/states.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';

@Component({
  selector: 'app-administrative-list',
  templateUrl: './administrative-list.component.html',
  styleUrls: ['./administrative-list.component.css']
})
export class AdministrativeListComponent implements OnInit {

  userDetail: UserDetails;
  stateArray: Array<State> = [];
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  allDistricts: any;
  districtModel: any;
  firstdistrictid;
  showStateDiv = false;
  showDistrictDiv = false;
  showCityDiv = false;
  showAddBtn = true;
  constructor(private modalService: NgbModal, private administrativeServiceapi: AdministrativeServiceapi) {
    this.userDetail = JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.userDetail);
  }

  ngOnInit() {
    this.showStateDiv = true;
    this.showDistrictDiv = false;
    this.showCityDiv = false;
    this.getStateDetails();
    this.showAddBtn = !(this.userDetail.userRoles[0].name === 'ROLE_ADMIN' && this.userDetail.cityId !== undefined);
  }
  showState() {
    this.showStateDiv = true;
    this.showDistrictDiv = false;
    this.showCityDiv = false;
    this.getStateDetails();
  }
  showDistrict() {
    this.showStateDiv = false;
    this.showDistrictDiv = true;
    this.showCityDiv = false;
    this.getDistrictDetails(this.userDetail.stateId);
  }
  showCity() {
    this.showStateDiv = false;
    this.showDistrictDiv = false;
    this.showCityDiv = true;
    this.getDistrictDetails(this.userDetail.stateId);
  }


  getStateDetails() {
    this.administrativeServiceapi.getStates().subscribe((data: State[]) => {
      this.stateArray = data;
    });
  }

  getDistrictDetails(value) {
    this.administrativeServiceapi.getDistricts(value).subscribe((data: District[]) => {
      this.districtArray = data;
      this.allDistricts = this.districtArray;
      this.firstdistrictid = this.allDistricts[0].id;
      this.districtModel = this.firstdistrictid;
      this.getCityDetails(this.firstdistrictid);
    });
  }

  getCityDetails(value) {
    if (value !== '') {
      this.administrativeServiceapi.getCities(value).subscribe((data: City[]) => {
        this.cityArray = data;
      });
    }
  }


  openAdministrative() {
    const modalRef = this.modalService.open(AdministrativeComponent, { backdrop: 'static', keyboard: false });
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        // this.getVehicles(0, '', this.districtModel, this.cityModel);
      }
    }).catch((error) => {
    });
  }

}
