import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LiveTrackingServiceAPI } from './services/livetracking.api.service';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { PanicSummary } from '../panic-alerts-list/panicsummary.model';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
import { DeviceCommunicationServiceApi } from '../../services/devicecommunication.api';
import { Devicecommunication } from '../../models/devicecommunication.model';
import { MovementdetailsreportComponent } from '../../shared/reports/movementdetailsreport/movementdetailsreport.component';
import { MovementgraphreportComponent } from '../../shared/reports/movementgraphreport/movementgraphreport.component';
import { VehicleAuthreportComponent } from '../reports/vehicle-authreport/vehicle-authreport.component';
import { PanicdetailsreportComponent } from '../../shared/reports/panicdetailsreport/panicdetailsreport.component';
import { DistrictwisetrackingreportComponent } from '../reports/districtwisetrackingreport/districtwisetrackingreport.component';
import { DevicecommunicatingreportComponent } from '../reports/devicecommunicatingreport/devicecommunicatingreport.component';
import { TripandroutedeviationComponent } from '../reports/tripandroutedeviation/tripandroutedeviation.component';

@Component({
  selector: 'app-livetracking',
  templateUrl: './livetracking.component.html',
  styleUrls: ['./livetracking.component.css']
})
export class LivetrackingComponent implements OnInit, OnDestroy {

  @ViewChild('tripandroutedeviationpage')
  private tripandroutedeviationpage: TripandroutedeviationComponent;
  @ViewChild('movementreportpage')
  private movementreportpage: MovementdetailsreportComponent;
  @ViewChild('movementgraphpage')
  private movementgraphpage: MovementgraphreportComponent;
  @ViewChild('vehicleauthreportpage')
  private vehicleauthreportpage: VehicleAuthreportComponent;
  @ViewChild('panicalertreportpage')
  private panicalertreportpage: PanicdetailsreportComponent;
  @ViewChild('districtwisereportpage')
  private districtwisereportpage: DistrictwisetrackingreportComponent;
  @ViewChild('devicereportpage')
  private devicereportpage: DevicecommunicatingreportComponent;
  routeDeviationCount: number;
  panicTotalCount: number;
  tripClosedCount: number;
  tripOpenCount: number;
  totalTripCount: number;

  vehicleIdel: number;
  vehicleStopped: number;
  vehicleRunning: number;
  vehicleTowing: number;
  vehicleParked: number;
  vehicleOverSpeed: number;
  ignitionOn: number;
  ignitionOff: number;
  onBattery: number;
  isdisable = false;
  devicecommunicationdata: Array<Devicecommunication> = [];
  movementStatus: Array<Devicecommunication> = [];
  deviceSummaryDetails: number;
  cityModel: any;
  districtArray: Array<District> = [];
  panicSummary: Array<PanicSummary> = [];
  videoPanicSummary: PanicSummary = new PanicSummary();
  webPanicSummary: PanicSummary = new PanicSummary();
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;
  formatDate: string;

  totalVehicleinstalled;
  totalVehicleCommunicating;
  totalVehicleNotCommunicating;
  runnigVehicle: number;
  stoppedVehicles: number;
  isTripClosed: boolean;

  constructor(private router: Router, private liveTrackingServiceAPI: LiveTrackingServiceAPI,
    private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private deviceCommunicationApi: DeviceCommunicationServiceApi) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
    this.isTripClosed = false;
    this.vehicleIdel = 0;
    this.vehicleStopped = 0;
    this.vehicleRunning = 0;
    this.vehicleTowing = 0;
    this.vehicleParked = 0;
    this.vehicleOverSpeed = 0;
    this.ignitionOn = 0;
    this.ignitionOff = 0;
    this.onBattery = 0;
  }

  vehicleAuthDetails;
  liveVehicleStatus;
  authValue;
  unAuthValue;
  totalAuthCount;
  parkingStatus;
  overSpeedStatus;
  idealStatus;
  routeDeviationStatus;
  selected: string;
  getVehicle;
  districtModel: any;
  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.callmovementreportpage();
    this.getVehicle = setInterval(() => {
      this.callmovementreportpage();
    }, 10000);


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
    this.videoPanicSummary = new PanicSummary();
    this.webPanicSummary = new PanicSummary();
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
    this.videoPanicSummary = new PanicSummary();
    this.webPanicSummary = new PanicSummary();
    this.callmovementreportpage();
  }
  cityChange() {
    this.callmovementreportpage();
  }
  changeDate() {
    this.callmovementreportpage();
  }
  callmovementreportpage() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.tripandroutedeviationpage.getrouteDeviationCount('false', this.formatDate, this.districtModel);
    this.movementreportpage.getMovementDetails(this.userDetails.stateId, this.districtModel, this.cityModel, this.formatDate);
    this.movementgraphpage.getMovementDetails(this.userDetails.stateId, this.districtModel, this.cityModel, this.formatDate);
    this.vehicleauthreportpage.getVehicleAuthDetails(this.userDetails.stateId, this.districtModel, this.cityModel, this.formatDate);
    this.panicalertreportpage.getPanicSummary(this.districtModel, this.cityModel, this.formatDate);
    this.districtwisereportpage.getDistrictWiseTracking(this.userDetails.stateId, this.formatDate);
    this.devicereportpage.getallmodemdetails(true, this.userDetails.stateId, this.districtModel, this.cityModel, this.formatDate, 0, '');
  }

  ngOnDestroy() {
    if (this.getVehicle) {
      clearInterval(this.getVehicle);
    }
  }

}
