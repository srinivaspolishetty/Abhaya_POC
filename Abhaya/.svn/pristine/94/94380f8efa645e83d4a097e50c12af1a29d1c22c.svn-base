import { Component, OnInit } from '@angular/core';
import { Driver } from './driver.model';
import { PageModel } from '../page.model';
import { DriverApiService } from './services/driver.api.service';
import { PaginationModel } from '../pagination.model';
import { DriverComponent } from './driver/driver.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DriverdetailsviewComponent } from './driverdetailsview/driverdetailsview.component';
declare let jsPDF;
import * as autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  public driveArray: Array<Driver> = [];
  downloaddriveArray: Array<Driver> = [];
  public page: PageModel;
  public p: number;
  searchValue = '';
  public showSearchClear = false;
  isTodaysInstalled = false;
  closedText = 'Todays';
  openText = 'All';
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  showFilters = false;
  formatDate: string;
  model: NgbDateStruct;

  constructor(private driverApiService: DriverApiService, private modalService: NgbModal, private activatedRoute: ActivatedRoute,
    private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.activatedRoute.params.subscribe(params => {
      this.isTodaysInstalled = params['isTodaysInstalled'] !== undefined ? params['isTodaysInstalled'] : false;
    });
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';

  }

  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
  }

  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  refreshPage() {
    this.districtModel = '';
    this.cityModel = '';
    this.searchValue = '';
    this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
  }
  downloadPdf() {
    this.downloadDrivers(0, this.searchValue, this.districtModel, this.cityModel);
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
    this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }

  cityChange() {
    this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
  }
  pageChanged(event) {
    this.p = event;
    this.getDrivers(this.p - 1, this.searchValue, this.districtModel, this.cityModel);
    console.log(event);
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
      this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }
  changeResults() {
    this.isTodaysInstalled = !this.isTodaysInstalled;
  }

  getDrivers(page: number, searchValue: string, districtId: string, cityId: string) {
    this.driverApiService.getAll(page, 10, searchValue, districtId, cityId).subscribe((data: PaginationModel) => {
      this.driveArray = data.content;
      this.page = data.page;
      console.log(this.driveArray);
    });
  }

  openDriver() {
    const modalRef = this.modalService.open(DriverComponent, { backdrop: 'static', keyboard: false });
    modalRef.result.then((result) => {
      console.log(result);
      if (result === 'refreshContent') {
        this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  editDriver(driver: Driver) {
    const modalRef = this.modalService.open(DriverComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.dlNumber = driver.dlNumber;
    modalRef.result.then((result) => {
      console.log(result);
      if (result === 'refreshContent') {
        this.getDrivers(0, this.searchValue, this.districtModel, this.cityModel);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  omitSpecialChar(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || (k >= 48 && k <= 57));
  }

  onlyAllowNumbers(event) {
    let k;
    k = event.charCode;
    return ((k >= 48 && k <= 57));
  }

  openDriverdetails(driverDetails) {
    const modalRef = this.modalService.open(DriverdetailsviewComponent, {
      windowClass: 'popup_alignment_dashBoard', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectDriverDetails = driverDetails;
  }

  downloadDrivers(page: number, searchValue: string, districtId: string, cityId: string) {
    this.driverApiService.getAll(page, '', searchValue, districtId, cityId).subscribe((data: PaginationModel) => {
      this.downloaddriveArray = data.content;
      const doc = new jsPDF('L', 'mm', 'a4');
      const col = ['ID', 'Driving Licence No', 'Driver Name', 'RFID', 'Mobile Number', 'Gender', 'City', 'District', 'DL Expry Date'];
      const rows = [];
      const itemNew = this.downloaddriveArray;
      itemNew.forEach(element => {
        const temp = [element.driverId, element.dlNumber, element.driverName, element.rfId, element.contactNumber,
        element.gender, element.cityName, element.districtName, element.dlExpiryDate];
        rows.push(temp);
      });
      doc.autoTable(col, rows, {
        theme: 'grid',
        styles: { overflow: 'linebreak', fontSize: 9 },
        headerStyles: { fillColor: [103, 66, 192], halign: 'center', lineWidth: 0.1, lineColor: '#ffffff' },
        bodyStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        margin: { top: 15, left: 5 },
        pageBreak: 'always',
        halign: 'center',
        valign: 'middle',
        addPageContent: function (data) {
          doc.text('Driver Details', 5, 10);
        }
      });
      doc.save('Driver_Details_' + this.formatDate + '.pdf');
    });
  }

}
