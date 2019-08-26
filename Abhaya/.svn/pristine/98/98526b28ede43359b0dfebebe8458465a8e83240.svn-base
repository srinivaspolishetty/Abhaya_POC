import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TripDetailsApiService } from './services/tripdetails.api.service';
import { TripDetails } from './tripdetails.model';
import { PageModel } from '../page.model';
import { PaginationModel } from '../pagination.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PanicAlert } from '../../shared/panic-alerts-list/panicalert.model';
import { RouteDeviation } from '../route-deviation/route-deviation.model';
import { ToasterService } from '../../shared/util/toaster.service';
import { PanicApiService } from '../../shared/panic-alerts-list/services/panic.alert.services';
import { RouteDeviationService } from '../route-deviation/services/route.deviation.services';
import { RoutedeviationviewComponent } from '../route-deviation/routedeviationview/routedeviationview.component';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  public tripDetailsArray: Array<TripDetails> = [];
  routeDeviationArray: Array<RouteDeviation> = [];
  public panicAlertArray: Array<PanicAlert> = [];
  public page: PageModel;
  public p: number;
  isTripClosed = false;
  searchValue = '';
  maxDate = this.calendar.getToday();
  public showSearchClear = false;
  showFilters = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;
  tripType: string;

  constructor(private tripDetailsApiService: TripDetailsApiService, private router: Router, private calendar: NgbCalendar,
    private mastersServicesApi: MastersServicesApi, private ngbDateFRParserFormatter: NgbDateFRParserFormatter,
    private modalService: NgbModal, private routeDeviationService: RouteDeviationService,
    private panicApiService: PanicApiService, private toasterService: ToasterService,
    private activatedRoute: ActivatedRoute) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.tripType = params['tripclosed'];
      if (this.tripType !== undefined && this.tripType === 'true') {
        this.isTripClosed = true;
      } else {
        this.isTripClosed = false;
      }
    });
    this.getDistricts(this.userDetails.stateId);
    this.getTripDetails(0, this.searchValue);
  }
  refreshPage() {
    this.searchValue = '';
    this.districtModel = '';
    this.cityModel = '';
    this.showSearchClear = false;
    this.model = this.calendar.getToday();
    this.getTripDetails(0, this.searchValue);


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
    this.getTripDetails(0, this.searchValue);
  }

  pageChanged(event) {
    this.p = event;
    this.getTripDetails(this.p - 1, this.searchValue);
  }
  searchData() {
    if (this.searchValue !== undefined) {
      this.getTripDetails(0, this.searchValue);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }

  changeTrip(isTripClosed) {
    this.isTripClosed = isTripClosed;
    this.getTripDetails(0, this.searchValue);
  }

  getTripDetails(page: number, searchValue: string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.tripDetailsApiService.getAll(page, 10, this.isTripClosed, formatDate, searchValue).subscribe((data: PaginationModel) => {
      this.tripDetailsArray = data.content;
      this.page = data.page;
      console.log(this.tripDetailsArray);
    });
  }

  navigateToTrip(tripDetails: TripDetails) {
    if (this.isTripClosed) {
      this.closedTrip(tripDetails);
    } else {
      this.openClosedTrip(tripDetails);
    }
  }

  changeDate() {
    this.getTripDetails(0, this.searchValue);
  }

  openClosedTrip(tripDetails: TripDetails) {
    this.router.navigate(['/rta/opentrips'],
      {
        queryParams: { tripId: tripDetails.tripId, rcNumber: tripDetails.rcNumber, citizenMobileNumber: tripDetails.citizenMobileNumber },
        queryParamsHandling: 'merge'
      });
  }

  closedTrip(tripDetails: TripDetails) {
    this.router.navigate(['/rta/closedtrips'],
      {
        queryParams: { tripId: tripDetails.tripId, origin: tripDetails.sourceLatLang, destination: tripDetails.destiLatLang },
        queryParamsHandling: 'merge'
      });
  }

  viewRouteDeviation(tripDetails) {
    const selectedId = tripDetails.tripId;
    this.getRouteDeviations(selectedId);
  }

  viewPanicDetails(tripDetails) {
    alert(tripDetails.tripId);
  }

  openPanicAlerts(panicAlert) {
    this.panicApiService.getPanicByTripId(panicAlert.tripId).subscribe((data: PaginationModel) => {
      this.panicAlertArray = data.content;
      console.log(this.panicAlertArray);
      if (this.panicAlertArray.length === 0) {
        this.toasterService.showWarning('bottom-right', 'No Panic Available for This Trip.');
      } else {
        this.router.navigate(['/rta/panicalert'], {
          queryParams: {
            tripId: panicAlert.tripId,
            rcNumber: panicAlert.rcNumber, citizenMobileNumber: panicAlert.citizenMobileNumber, orgin : panicAlert.sourceLatLang, destination : panicAlert.destiLatLang
          }, queryParamsHandling: 'merge'
        });
      }
    });
  }
  getRouteDeviations(selectedid: string) {
    this.routeDeviationService.getRouteDeviationDetails(0, 10, '', '', '', '', '', '', '', selectedid)
      .subscribe((data: PaginationModel) => {
        this.routeDeviationArray = data.content[0];
        console.log(this.routeDeviationArray);
        const modalRef = this.modalService.open(RoutedeviationviewComponent, { backdrop: 'static', keyboard: false });
        modalRef.componentInstance.routeDetails = this.routeDeviationArray;

      });
  }

}
