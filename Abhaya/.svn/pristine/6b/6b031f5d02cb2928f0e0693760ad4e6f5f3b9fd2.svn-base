import { Component, OnInit } from '@angular/core';
import { MastersServicesApi } from '../util/services/masters.api';
import { PageModel } from '../page.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateFRParserFormatter} from '../util/dateformatter';

@Component({
  selector: 'app-modemdetails',
  templateUrl: './modemdetails.component.html',
  styleUrls: ['./modemdetails.component.css']
})
export class ModemdetailsComponent implements OnInit {
  showFilters = false;
  public page: PageModel;
  public p: number;
  searchValue = '';
  model: NgbDateStruct;
  public showSearchClear = false;
  modemdetails;

  constructor(private mastersServicesApi: MastersServicesApi, private calendar: NgbCalendar,
              private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
   }
  ngOnInit() {
    this.getallmodemdetails(0, this.searchValue);
  }
  refreshPage() {
    this.searchValue = '';
    this.getallmodemdetails(0, this.searchValue);
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  pageChanged(event) {
    this.p = event;
    this.getallmodemdetails(this.p - 1, this.searchValue); // need to remove param
  }
  changeDate() {
    this.getallmodemdetails(0, this.searchValue); // need to remove param
  }

  searchData() {
    if (this.searchValue !== undefined) {
      this.getallmodemdetails(0, this.searchValue);
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }

  getallmodemdetails(page: number, searchString: string) {
    const formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.mastersServicesApi.getModemData(page, 10, searchString, '', '').subscribe((data: any) => {
      this.modemdetails  =  data.content;
      this.page = data.page;
      console.log(this.modemdetails);
    });
  }

}
