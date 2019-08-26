import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetails } from '../../../login/userdetails.model';
import { State } from '../../util/states.model';
import { District } from '../../util/district.model';
import { City } from '../../util/city.model';
import { AdministrativeServiceapi } from '../services/administrative.api.service';
import { MastersServicesApi } from '../../util/services/masters.api';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.css']
})
export class AdministrativeComponent implements OnInit {

  userDetails: UserDetails;
  stateDetails: State;
  districtDetails: District;
  cityDetails: City;

  newStateName: string;
  newStateCode: string;
  newDistrictName: string;

  newCityName: string;
  newCityCode: string;

  showStateOption = false;
  showDistrictOption = false;
  showCityOption = false;
  stateArray: Array<State> = [];
  districtArray: Array<District> = [];
  stateModel: any;
  districtModel: any;
  selectType = '';
  selectedState;
  selectedStateName;
  selectedDistrict;
  selectedDistrictName;
  stateNameRO;
  stateIdRO;
  districtNameRO;


  constructor(public activeModal: NgbActiveModal, private mastersServicesApi: MastersServicesApi,
    private administrativeServiceapi: AdministrativeServiceapi) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.stateModel = '';
    this.stateNameRO = this.userDetails.stateName;
    this.stateIdRO = this.userDetails.stateId;
  }

  ngOnInit() {
    if (this.userDetails.userRoles[0].name === 'SUPER_ADMIN') {
      this.showStateOption = true;
      this.showDistrictOption = true;
      this.showCityOption = true;
      return false;
    }
    if (this.userDetails.userRoles[0].name === 'ROLE_ADMIN' && this.userDetails.districtId === undefined
      && this.userDetails.cityId === undefined) {
      this.showStateOption = false;
      this.showDistrictOption = true;
      this.showCityOption = true;
      this.stateNameRO = this.userDetails.stateName;
      this.selectedState = this.userDetails.stateId;
      this.selectedStateName = this.userDetails.stateName;
      return false;
    }
    if (this.userDetails.userRoles[0].name === 'ROLE_ADMIN' && this.userDetails.districtId !== undefined
      && this.userDetails.cityId === undefined) {
      this.showStateOption = false;
      this.showDistrictOption = false;
      this.showCityOption = true;
      this.stateNameRO = this.userDetails.stateName;
      this.districtNameRO = this.userDetails.districtName;
      this.selectedDistrict = this.userDetails.districtId;
      this.selectedDistrictName = this.userDetails.districtName;
      this.selectedState = this.userDetails.stateId;
      this.selectedStateName = this.userDetails.stateName;
    }
    console.log(this.userDetails.cityId);
  }

  changeSelect() {
    if (this.selectType === 'District') {
      this.stateModel = '';
      this.getStates();
    }
    if (this.selectType === 'City') {
      this.districtModel = '';
      this.stateModel = '';
      this.getStates();
      this.getDistricts(this.userDetails.stateId);
    }
  }


  stateChange(selectedState, event) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    this.selectedState = selectedState;
    this.selectedStateName = selectElementText;
    if (this.selectType === 'City') {
      this.districtModel = '';
      this.selectedDistrict = '';
      this.selectedDistrictName = '';
      this.getDistricts(this.selectedState);
    }
  }


  districtChange(selectedDistrict, event) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    this.selectedDistrict = selectedDistrict;
    this.selectedDistrictName = selectElementText;
  }

  onSubmit() {
    if (this.selectType === 'State') {
      this.stateDetails = new State(null, this.newStateName, this.newStateCode);
      this.createNewState();
    }
    if (this.selectType === 'District') {
      this.districtDetails = new District(null, this.newDistrictName, this.newDistrictName, this.stateIdRO, this.stateNameRO);
      this.createNewDistrict();
      console.log(this.districtDetails);
    }
    if (this.selectType === 'City') {
      this.cityDetails = new City(null, this.newCityName, this.newCityCode, this.selectedDistrict,
        this.selectedDistrictName, this.stateIdRO, this.stateNameRO);
      this.createNewCity();
      console.log(this.cityDetails);
    }
  }

  createNewState() {
    this.administrativeServiceapi.creatState(JSON.stringify(this.stateDetails)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }

  createNewDistrict() {
    this.administrativeServiceapi.createDistrict(JSON.stringify(this.districtDetails)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }

  createNewCity() {
    this.administrativeServiceapi.createCity(JSON.stringify(this.cityDetails)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }


  getStates() {
    this.mastersServicesApi.getStates().subscribe((data: State[]) => {
      this.stateArray = data;
      console.log(data);
    });
  }

  getDistricts(value) {
    this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
      this.districtArray = data;
      console.log(this.districtArray);
    });
  }

}
