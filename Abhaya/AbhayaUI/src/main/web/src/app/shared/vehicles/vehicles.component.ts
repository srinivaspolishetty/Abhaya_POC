import { Component, OnInit } from '@angular/core';
import { PageModel } from '../page.model';
import { PaginationModel } from '../pagination.model';
import { VehicleApiService } from './services/vehicle.api.service';
import { Vehicle } from './vehicle.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { District } from '../util/district.model';
import { MastersServicesApi } from '../util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { City } from '../util/city.model';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
declare let jsPDF;
import * as autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { NewregistrationComponent } from '../../rta/newregistration/newregistration.component';
import { VehiclemapComponent } from './vehiclemap/vehiclemap.component';
import { VehicleauthdriversComponent } from './vehicleauthdrivers/vehicleauthdrivers.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicleArray: Array<Vehicle> = [];
  downloadvehicleArray: Array<Vehicle> = [];
  public page: PageModel;
  public p: number;
  searchValue = '';
  public showSearchClear = false;
  isTodaysInstalled = false;
  pendinginstallation = false;
  totalInstalled = false;
  currentPageTitle = 'VEHICLES';
  buttonTitle = 'Vehicles';
  closedText = 'Todays';
  openText = 'All';
  selected: string;
  model: NgbDateStruct;
  userDetails: UserDetails;
  selectdRcNumber = 'undefined';
  showFilters = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  formatDate: string;
  constructor(private vehicleApiService: VehicleApiService, private calendar: NgbCalendar, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute, private mastersServicesApi: MastersServicesApi, private router: Router,
    private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.activatedRoute.params.subscribe(params => {
      this.isTodaysInstalled = params['isTodaysInstalled'] !== undefined ? params['isTodaysInstalled'] : false;
    });
    this.activatedRoute.params.subscribe(params => {
      this.pendinginstallation = params['pendinginstallation'] !== undefined ? params['pendinginstallation'] : false;
    });
    this.activatedRoute.params.subscribe(params => {
      this.totalInstalled = params['totalInstalled'] !== undefined ? params['totalInstalled'] : false;
    });
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
  }

  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    if (this.isTodaysInstalled) {
      this.selected = this.model.day + '/' + this.model.month + '/' + this.model.year;
      this.getVehiclesbystatus(0, this.isTodaysInstalled, this.selected);
      this.currentPageTitle = 'TODAY\'S INSTALLED';
      this.buttonTitle = 'Today\'s Installed';
      return false;
    }
    if (this.pendinginstallation) {
      this.getAllPendingVehicles(0, this.pendinginstallation);
      this.currentPageTitle = 'PENDING INSTALLATION';
      this.buttonTitle = 'Pending Installation';
      return false;
    }
    if (this.totalInstalled) {
      this.getAllPendingVehicles(0, this.totalInstalled);
      this.currentPageTitle = 'TOTAL INSTALLED';
      this.buttonTitle = 'Total Installed';
    } else {
      this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
      this.currentPageTitle = 'VEHICLES';
      this.buttonTitle = 'Vehicles';
    }
  }

  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  refreshPage() {
    this.districtModel = '';
    this.cityModel = '';
    this.searchValue = '';
    this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
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
    else{
      this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
        this.cityArray = data;
      });
    }
    this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
  }
  pageChanged(event) {
    this.p = event;
    if (this.isTodaysInstalled) {
      this.selected = this.model.day + '/' + this.model.month + '/' + this.model.year;
      this.getVehiclesbystatus(this.p - 1, this.isTodaysInstalled, this.selected);
      return false;
    }
    if (this.pendinginstallation) {
      this.getAllPendingVehicles(this.p - 1, this.pendinginstallation);
      return false;
    }
    if (this.totalInstalled) {
      this.getAllPendingVehicles(this.p - 1, this.totalInstalled);
    } else {
      this.getVehicles(this.p - 1, this.searchValue, this.districtModel, this.cityModel);
    }
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }
  downloadpdf(vehiclenumbr) {
    this.selectdRcNumber = vehiclenumbr.rcNumber;
    if (this.selectdRcNumber !== 'undefined') {
      setTimeout(this.downloadqrcode, 500, this.selectdRcNumber);
    }
  }

  downloadqrcode(selectedVehicleNumber) {
    const data = document.getElementById('qrcode');
    html2canvas(data).then(canvas => {
      const imgWidth = 211;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/JPEG');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save(selectedVehicleNumber + '.pdf');
    });
  }
  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }
  getTripDetails(vehicle) {
    this.router.navigate(['/rta/tripTracking', { 'selectedVechile': vehicle.serialNumber }]);
  }

  changeResults() {
    this.isTodaysInstalled = false;
    this.pendinginstallation = false;
    this.totalInstalled = false;
    this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
    this.currentPageTitle = 'VEHICLES';
  }
  getVehiclesbystatus(page, status, selectdate, ) {
    this.vehicleApiService.getAllByStatus(page, 10, status, selectdate).subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
      this.page = data.page;
    });
  }

  getAllPendingVehicles(page, status) {
    this.vehicleApiService.getAllPending(page, 10, status).subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
      this.page = data.page;
    });
  }

  getVehicles(page: number, searchValue: string, districtId: string, cityId: string) {
    this.vehicleApiService.getAll(page, 10, searchValue, districtId, cityId, '').subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
      this.page = data.page;
    });
  }

  openVehicle() {
    const modalRef = this.modalService.open(VehicleComponent, { backdrop: 'static', keyboard: false });
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
      }
    }).catch((error) => {
    });
  }

  editVehicle(vehicle: Vehicle) {
    const modalRef = this.modalService.open(VehicleComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.rcNumber = vehicle.rcNumber;
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        this.getVehicles(0, this.searchValue, this.districtModel, this.cityModel);
      }
    }).catch((error) => {
    });
  }
  openRegistration(vehicle) {
    const modalRef = this.modalService.open(NewregistrationComponent,
      { windowClass: 'popup_alignment_dashBoard', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.vehicleNumber = vehicle.rcNumber;
  }
  openVehiclemap(vehicle) {
    const modalRef = this.modalService.open(VehiclemapComponent, {
      windowClass: 'popup_alignment_dashBoard', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.vehiclelocation = vehicle;
  }
  viewAuthDrivers(vehicle) {
    const modalRef = this.modalService.open(VehicleauthdriversComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.selectedVehicle = vehicle;
  }


  vehicleDownload() {
    this.downloadVehicleDetails(0, this.searchValue, this.districtModel, this.cityModel);
  }
  downloadVehicleDetails(page: number, searchValue: string, districtId: string, cityId: string) {
    this.vehicleApiService.getAll(page, '', searchValue, districtId, cityId, '').subscribe((data: PaginationModel) => {
      this.downloadvehicleArray = data.content;
      const doc = new jsPDF('L', 'mm', 'a4');
      const col = ['Vehicle No', 'IoT Number', 'Owner Name', 'Mobile Number', 'City', 'District', 'Date', 'Valid From', 'Valid To'];
      const rows = [];
      const itemNew = this.downloadvehicleArray;
      console.log(this.downloadvehicleArray);
      itemNew.forEach(element => {
        const temp = [element.rcNumber, element.serialNumber, element.ownerName, element.ownerContactNumber,
        element.cityName, element.districtName, element.createdDate, element.registrationDate, element.rcExpiryDate];
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
          doc.text('Vehicle Details', 5, 10);
        }
      });
      doc.save('Vehicle_Details_' + this.formatDate + '.pdf');
    });
  }
}
