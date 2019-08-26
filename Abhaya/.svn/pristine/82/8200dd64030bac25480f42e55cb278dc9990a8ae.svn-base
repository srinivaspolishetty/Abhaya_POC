import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewregistrationComponent } from '../newregistration/newregistration.component';
import { Router } from '@angular/router';
import { VehicleApiService } from '../../shared/vehicles/services/vehicle.api.service';
import { PaginationModel } from '../../shared/pagination.model';
import { PageModel } from '../../shared/page.model';
import { Vehicle } from '../../shared/vehicles/vehicle.model';
import { DashBoardApiService } from './services/dashboard.api.service';
import { VehicleInstallSummary } from './vehicleInstallSummary.model';
import { VehicleStoppageSummary } from './vehicleStoppageSummary.model';
import { HorizontalBarChart } from '../../shared/util/horizontalbar';
import { ToasterService } from '../../shared/util/toaster.service';
import { District } from '../../shared/util/district.model';
import { City } from '../../shared/util/city.model';
import { MastersServicesApi } from '../../shared/util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../../shared/util/dateformatter';
import { DeviceCommunicationServiceApi } from '../../services/devicecommunication.api';
import { LiveTrackingServiceAPI } from '../../shared/livetracking/services/livetracking.api.service';
import { DevicecommunicatingreportComponent } from '../../shared/reports/devicecommunicatingreport/devicecommunicatingreport.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('devicereportpage')
  private devicereportpage: DevicecommunicatingreportComponent;

  isdisable = false;
  vehicleArray: Array<Vehicle> = [];

  page: PageModel;

  vehicleInstallSummary: VehicleInstallSummary;

  vehicleStoppageSummary: VehicleStoppageSummary;

  horizontalBarChart: HorizontalBarChart;

  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;
  isTodaysInstalled: boolean;
  totalVehicleinstalled;
  totalVehicleCommunicating;
  totalVehicleNotCommunicating;
  formatDate;
  deviceSummaryDetails: number;

  constructor(private modalService: NgbModal, private router: Router, private vehicleApiService: VehicleApiService,
    private dashBoardApiService: DashBoardApiService, private toasterService: ToasterService,
    private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar, private liveTrackingServiceAPI: LiveTrackingServiceAPI,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private deviceCommunicationApi: DeviceCommunicationServiceApi) {
    this.vehicleInstallSummary = new VehicleInstallSummary(0, 0, 0);
    this.vehicleStoppageSummary = new VehicleStoppageSummary(0, 0);
    /* Graph Changes  https://github.com/swimlane/ngx-charts*/
    this.horizontalBarChart = new HorizontalBarChart([636, 375], true, true, false, false, false, false, true, 'Label of X', 'Label of Y');
    this.horizontalBarChart.colorScheme = { domain: ['#6742c0'] };
    // domain: ['#26a1ee', '#A10A28', '#C7B42C', '#AAAAAA']
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
    this.isTodaysInstalled = false;
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
  }

  ngOnInit() {
    this.callmovementreportpage();
    this.getVehicles(0);
    this.getVehicleIntsallationSummary();
    this.getVehicleStoppageSummary();
    this.getDistricts(this.userDetails.stateId);
    this.getDistrictSummaryChart();
    this.getallmodemdetails(0, '');
  }


  getDistricts(value) {
    if (value === '') {
      this.districtArray = [];
    } else {
      this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
        this.districtArray = data;
        if (this.userDetails.userRoles[0].name === 'ROLE_ADMIN' && this.userDetails.cityId === undefined) {
          this.districtModel = this.userDetails.districtId;
          this.isdisable = true;
          this.getCities(this.userDetails.districtId);
        }
      });
    }
    this.getVehicles(0);
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
    this.getVehicleIntsallationSummary();
    this.getVehicleStoppageSummary();
    this.getDistrictSummaryChart();
    this.getallmodemdetails(0, '');
    this.callmovementreportpage();
  }

  cityChange() {
    this.getVehicleIntsallationSummary();
    this.getVehicleStoppageSummary();
    this.getDistrictSummaryChart();
    this.getallmodemdetails(0, '');
    this.callmovementreportpage();
  }
  changeDate() {
    this.getVehicleIntsallationSummary();
    this.getVehicleStoppageSummary();
    this.getDistrictSummaryChart();
    this.getallmodemdetails(0, '');
    this.callmovementreportpage();
  }
  openRegistration() {
    const modalRef = this.modalService.open(NewregistrationComponent, {
      windowClass: 'popup_alignment_dashBoard', backdrop: 'static',
      keyboard: false
    });
  }

  navigateVehicle() {
    this.router.navigate(['/rta/vehicles']);
  }

  getVehicles(page: number) {
    this.vehicleApiService.getAll(page, 8, '', '', '', '').subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
      this.page = data.page;
    });
  }

  getVehicleIntsallationSummary() {
    this.dashBoardApiService.getVehicleIntsallationSummary().subscribe((data: VehicleInstallSummary) => {
      this.vehicleInstallSummary = data;
    });
  }

  getVehicleStoppageSummary() {
    this.dashBoardApiService.getVehicleStoppageSummary().subscribe((data: VehicleStoppageSummary) => {
      this.vehicleStoppageSummary = data;
    });
  }

  todayinstallednavigate() {
    this.router.navigate(['/rta/vehicles', { 'isTodaysInstalled': true }]);
  }
  pendingNavigate() {
    this.router.navigate(['/rta/vehicles', { 'pendinginstallation': false }]);
  }
  allInstalled() {
    this.router.navigate(['/rta/vehicles', { 'totalInstalled': true }]);
  }

  onSelect(event) {
    console.log(event);
  }

  getDistrictSummaryChart() {
    this.liveTrackingServiceAPI.getDistrictWiseChart()
      .subscribe((data: any) => {
        const newdataarray = data;
        const districtNames = ['Anantapur', 'Chittor', 'East Godavari', 'Guntur', 'Ysr Kadapa', 'Kurnool',
          'Nellore', 'Prakasam', 'Srikakulam', 'Vizianagaram', 'West Godavari'];
        districtNames.forEach(function (value) {
          const newOj = { 'name': value, 'value': '0' };
          newdataarray.push(newOj);
        });
        this.horizontalBarChart.data = newdataarray;
      });
  }


  getallmodemdetails(page: number, searchString: string) {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.mastersServicesApi.getModemData(page, 10, searchString, '', '').subscribe((data: any) => {
      this.totalVehicleinstalled = data.page.totalElements;
      this.getCommunicationDetails(0, '');
    });
  }

  getCommunicationDetails(page, searchvalue) {
    this.deviceCommunicationApi.getDeviceCommunicationSummary(this.userDetails.stateId, this.districtModel, this.cityModel, '')
      .subscribe((data: any) => {
        this.deviceSummaryDetails = data[0].count;
        this.totalVehicleNotCommunicating = this.totalVehicleinstalled - this.deviceSummaryDetails;

      });
  }
  callmovementreportpage() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.devicereportpage.getallmodemdetails(false, this.userDetails.stateId, this.districtModel, this.cityModel, this.formatDate, 0, '');
  }

}
