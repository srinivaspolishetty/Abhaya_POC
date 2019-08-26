import { Component, OnInit } from '@angular/core';
import { MastersServicesApi } from '../util/services/masters.api';
import { PageModel } from '../page.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RawdatadetailsComponent } from './rawdatadetails/rawdatadetails.component';
import { PaginationModel } from '../pagination.model';
import {NgbDateFRParserFormatter} from '../util/dateformatter';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css']
})
export class RawdataComponent implements OnInit {
  // rawDataDetails = [];
  rawDataDetails: Array<any> = [];
  public page: PageModel;
  public p: number;
  model: NgbDateStruct;
  searchValue = '';
  public showSearchClear = false;
  showFilters = false;
  maxDate = this.calendar.getToday();
  constructor(private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar,
              private modalService: NgbModal, private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
   }

  ngOnInit() {
    this.getAllRawData(0, this.searchValue);
  }
  refreshPage() {
    this.searchValue = '';
    this.model = this.calendar.getToday();
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  refreshData() {
    this.getAllRawData(0, this.searchValue);
  }

  pageChanged(event) {
    this.p = event;
    this.getAllRawData(this.p - 1, this.searchValue); // need to remove param
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getAllRawData(0, this.searchValue);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }

  changeDate() {
    this.getAllRawData(0, this.searchValue); // need to remove param
  }

  getrawdatadetails(rawdataselected) {
    const modalRef = this.modalService.open(RawdatadetailsComponent, {backdrop: 'static', keyboard: false});
    modalRef.componentInstance.rawdataid = rawdataselected;
    console.log(rawdataselected);
  }

  getAllRawData(page: number, searchString:  string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.mastersServicesApi.getRawData(page, 10, searchString, formatDate).subscribe((data: PaginationModel) => {
      this.rawDataDetails  =  data.content;
      this.page = data.page;
    });
  }

}
