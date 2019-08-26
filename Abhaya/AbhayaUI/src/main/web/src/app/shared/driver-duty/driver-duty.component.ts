import { Component, OnInit } from '@angular/core';
import { DriverDutyApiService } from './services/driverduty.api.service';
import { DriverDuty } from './driverDuty.model';
import { PageModel } from '../page.model';
import { PaginationModel } from '../pagination.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { MastersServicesApi } from '../util/services/masters.api';
import { District } from '../util/district.model';
import { City } from '../util/city.model';
import { UserDetails } from '../../login/userdetails.model';
import {NgbDateFRParserFormatter} from '../util/dateformatter';
declare let jsPDF;
import * as autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-driver-duty',
  templateUrl: './driver-duty.component.html',
  styleUrls: ['./driver-duty.component.css']
})
export class DriverDutyComponent implements OnInit {

  public driverDutyArray:  Array<DriverDuty> = [];
  downloaddriverDutyArray:  Array<DriverDuty> = [];
  public page: PageModel;
  public p: number;
  model: NgbDateStruct;
  maxDate = this.calendar.getToday();
  searchValue = '';
  public showSearchClear = false;
  showFilters = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;

  constructor(private driverDutyApiService: DriverDutyApiService, private calendar: NgbCalendar,
    private mastersServicesApi: MastersServicesApi, private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
  }

  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.getDriverDuties(0, '', this.districtModel, this.cityModel);
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  refreshPage() {
    this.districtModel = '';
    this.cityModel = '';
    this.searchValue = '';
    this.model = this.calendar.getToday();
    this.getDriverDuties(0, '', this.districtModel, this.cityModel);
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
    this.getDriverDuties(0, this.searchValue, this.districtModel, this.cityModel);
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
  }
  pageChanged(event) {
    this.p = event;
    this.getDriverDuties(this.p - 1, this.searchValue, this.districtModel, this.cityModel);
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getDriverDuties(0, this.searchValue, this.districtModel, this.cityModel);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }

  changeDate() {
    this.getDriverDuties(0, this.searchValue, this.districtModel, this.cityModel);
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }

  getDriverDuties(page: number, searchValue: string, districtId: string, cityId: string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.driverDutyApiService.getAll(page, 10, formatDate, searchValue, districtId, cityId).subscribe((data:  PaginationModel) => {
      this.driverDutyArray  =  data.content;
      this.page = data.page;
      console.log(this.driverDutyArray);
    });
  }

  downloadRecords() {
    this.downloadDriverDuty(0, this.searchValue, this.districtModel, this.cityModel);
  }
  downloadDriverDuty(page: number, searchValue: string, districtId: string, cityId: string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.driverDutyApiService.getAll(page, '', formatDate, searchValue, districtId, cityId).subscribe((data:  PaginationModel) => {
      this.downloaddriverDutyArray  =  data.content;
      const doc = new jsPDF('L', 'mm', 'a4');
      const col = ['Vehicle No', 'IoT Number', 'Driver DL No', 'Driver Name', 'Driver Contact No', 'Duty Date', 'Duty Time', 'RFID'];
      const rows = [];
      const itemNew = this.downloaddriverDutyArray;
      console.log(this.downloaddriverDutyArray);
      itemNew.forEach(element => {
        const temp = [element.rcNumber, element.serialNumber, element.dlNumber, element.driverName, element.driverContactNumber,
           element.packetDate, element.packetTime, element.rfId];
        rows.push(temp);
      });
      doc.autoTable(col, rows, {
        theme: 'grid',
        styles: {overflow: 'linebreak', fontSize: 9},
        headerStyles: { fillColor: [103, 66, 192],  halign: 'center', lineWidth: 0.1, lineColor: '#ffffff' },
        bodyStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        margin: { top: 15, left: 5 },
        pageBreak: 'always',
        halign: 'center',
        valign: 'middle',
        addPageContent: function (data) {
          doc.text('Vehicle Details', 5, 10);
        }
      });
      doc.save('Driver_Duty_Details' + this.model + '.pdf');
    });
  }

}
