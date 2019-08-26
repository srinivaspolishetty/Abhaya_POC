import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MastersServicesApi } from '../../util/services/masters.api';
import { State } from '../../util/states.model';
import { District } from '../../util/district.model';
import { City } from '../../util/city.model';
import { UserDetails } from '../../../login/userdetails.model';
import { Role } from '../../../login/roles.model';
import { UserLevel } from '../../util/userlevel.model';
import { Department } from '../../util/department.model';
import { UserApiService } from '../services/user.api.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  stateArray = [];

  districtArray = [];

  cityArray = [];

  roleArray = [];

  userLevelArray = [];

  departmentArray = [];
  @Input() editUserDetails: UserDetails;
  userDetails: UserDetails;

  loginUserDetails: UserDetails;

  isEdit: boolean;
  roleId: any;
  constructor(public activeModal: NgbActiveModal, private mastersServicesApi: MastersServicesApi, private userApiService: UserApiService) {
    this.loginUserDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.roleId = '';
  }

  ngOnInit() {
    this.userDetails = new UserDetails();
    this.getRoles();
    this.getStates();
    if (this.editUserDetails) {
      this.isEdit = true;
      this.userDetails = this.editUserDetails;
      if (this.userDetails.userLevel > 1) {
        this.getDistricts(this.userDetails.stateId);
      }
      if (this.userDetails.userLevel > 2) {
        this.getCities(this.userDetails.districtId);
      }
    } else {
      this.userDetails.userLevel = '';
      this.userDetails.departmentId = '';
      this.userDetails.stateId = '';
      this.userDetails.districtId = '';
      this.userDetails.cityId = '';
    }
    this.getUserLevels(this.loginUserDetails.userLevel);
    this.getDepartments(this.loginUserDetails.departmentId);
  }

  getStates() {
    this.mastersServicesApi.getStates().subscribe((data: State[]) => {
      this.stateArray = data;
    });
  }

  getDistricts(value) {
    if (value === '') {
      this.districtArray = [];
    }
    // this.districtModel = '';
    this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
      this.districtArray = data;
    });
  }

  getCities(value) {
    // this.cityModel = '';
    if (value === '') {
      this.cityArray = [];
    }
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }

  getRoles() {
    this.mastersServicesApi.getRoles().subscribe((data: Role[]) => {
      this.roleArray = data;
      for (const prop in this.roleArray) {
        if (this.roleArray[prop].name === 'SUPER_ADMIN') {
          this.roleArray.splice(0, 1);
          break;
        }
      }
      if (this.isEdit) {
        this.roleId = this.userDetails.rolesVO[0].id;
      }
    });
  }

  getUserLevels(userLevelId: Number) {
    this.mastersServicesApi.getUserLevels(userLevelId).subscribe((data: UserLevel[]) => {
      this.userLevelArray = data;
    });
  }

  getDepartments(departmentId: Number) {
    this.mastersServicesApi.getDepartments(departmentId).subscribe((data: Department[]) => {
      this.departmentArray = data;
    });
  }

  updateData(userDetails: UserDetails) {
    userDetails.roles = [];
    userDetails.roles.push(this.roleId);
    userDetails.isEnabled = true;
    console.log(JSON.stringify(userDetails));
    this.userApiService.createUser(JSON.stringify(userDetails)).subscribe((data: any) => {
      console.log(data);
      this.activeModal.close('refreshContent');
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
    });
  }
}
