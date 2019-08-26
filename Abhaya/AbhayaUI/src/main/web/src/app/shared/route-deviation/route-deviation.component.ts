import { Component, OnInit } from '@angular/core';
import { RouteDeviationService } from './services/route.deviation.services';
import { PageModel } from '../page.model';
import { RouteDeviation } from './route-deviation.model';
import { PaginationModel } from '../pagination.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
declare let jsPDF;
import * as autoTable from 'jspdf-autotable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoutedeviationviewComponent } from './routedeviationview/routedeviationview.component';

@Component({
  selector: 'app-route-deviation',
  templateUrl: './route-deviation.component.html',
  styleUrls: ['./route-deviation.component.css']
})
export class RouteDeviationComponent implements OnInit {

  public routeDeviationArray: Array<RouteDeviation> = [];
  downloadrouteDeviationArray: Array<RouteDeviation> = [];
  public page: PageModel;
  public p: number;

  searchValue;
  public showSearchClear = false;
  formatDate: string;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;
  showFilters = false;

  constructor(private routeDeviationService: RouteDeviationService, private mastersServicesApi: MastersServicesApi,
    private calendar: NgbCalendar, private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private modalService: NgbModal) {
    this.page = new PageModel(0, 0, 0, 0);
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
  }

  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.getRouteDeviations(0, '', this.formatDate);
  }
  refreshPage() {
    this.searchValue = '';
    this.districtModel = '';
    this.cityModel = '';
    this.showSearchClear = false;
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getRouteDeviations(0, '', this.formatDate);
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  changeDate() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getRouteDeviations(0, '', this.formatDate);
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
    this.getRouteDeviations(0, '', this.formatDate);
  }
  pageChanged(event) {
    this.p = event;
    this.getRouteDeviations(this.p - 1, this.searchValue, this.formatDate);
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getRouteDeviations(0, this.searchValue, this.formatDate);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }
  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }


  getRouteDeviations(page: number, searchValue: string, selectDate: string) {
    console.log(selectDate);
    this.routeDeviationService.getAll(page, 10, searchValue, selectDate, this.districtModel, this.cityModel)
    .subscribe((data: PaginationModel) => {
      this.routeDeviationArray = data.content;
      this.page = data.page;
    });
  }
  downloadRouteDeviationTable() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.routeDeviationService.getAll(0, '', '', this.formatDate, this.districtModel, this.cityModel).subscribe((data: PaginationModel) => {
      this.downloadrouteDeviationArray = data.content;
      const doc = new jsPDF('L', 'mm', 'a4');
      const col = ['Trip ID', 'Vehicle Number', 'RF ID', 'Trip Request ID', 'Serial No', 'Driver Name', 'DL Number',
      'Driver Number', 'Owner Name', 'Owner Number', 'Citizen Mobile No', 'Deviation Time', 'Deviation Location', 'Source', 'Destination'];
      const rows = [];
      const itemNew = this.downloadrouteDeviationArray;
      console.log(this.downloadrouteDeviationArray);
      itemNew.forEach(element => {
        const temp = [element.tripId, element.rcNumber, element.rfId, element.tripRequestId, element.serialNumber,
           element.driverName, element.dlNumber, element.driverContactNumber, element.ownerName, element.ownerContactNumber,
            element.citizenMobileNumber, element.deviationTime, element.geoLocation, element.slocation, element.dlocation];
        rows.push(temp);
      });
      doc.autoTable(col, rows, {
        theme: 'grid',
        styles: { overflow: 'linebreak', fontSize: 9 },
        headerStyles: { fillColor: [103, 66, 192] },
        bodyStyles: {},
        alternateRowStyles: {},
        columnStyles: {
          0: { columnWidth: 10 },
          1: { columnWidth: 18 },
          2: { columnWidth: 18 },
          3: { columnWidth: 18 },
          4: { columnWidth: 18 },
          5: { columnWidth: 18 },
          6: { columnWidth: 18 },
          7: { columnWidth: 18 },
          8: { columnWidth: 18 },
          9: { columnWidth: 18 },
          10: { columnWidth: 18 },
          11: { columnWidth: 18 },
          12: { columnWidth: 26 },
          13: { columnWidth: 26 },
          14: { columnWidth: 26 }
        },
        margin: { top: 15, left: 5 },
        pageBreak: 'always',
        halign: 'center',
        valign: 'middle',
        addPageContent: function (data) {
          doc.text('Route Deviation Details', 5, 10);
        }
      });
      doc.save('Route_Deviation_Details.pdf');
    });
  }

  viewDetails(routeDeviation) {
    const modalRef = this.modalService.open(RoutedeviationviewComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.routeDetails = routeDeviation;
  }

}
