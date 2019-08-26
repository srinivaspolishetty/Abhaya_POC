import { Component, OnInit } from '@angular/core';
import { PageModel } from '../page.model';
import { TripTrackingApiService } from './services/triptracking.api.service';
import { PaginationModel } from '../pagination.model';
import { TripTracking } from './triptracking.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TripComponent } from './trip/trip.component';
import { NgbDateFRParserFormatter } from '../util/dateformatter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-tracking',
  templateUrl: './trip-tracking.component.html',
  styleUrls: ['./trip-tracking.component.css']
})
export class TripTrackingComponent implements OnInit {

  public tripTrackingArray: Array<TripTracking> = [];
  public page: PageModel;
  public p: number;
  searchValue = '';
  public showSearchClear = false;
  model: NgbDateStruct;
  maxDate = this.calendar.getToday();
  showFilters = false;
  formatDate;
  selectedVechile: string;
  constructor(private tripTrackingApiService: TripTrackingApiService, private calendar: NgbCalendar, private modalService: NgbModal
    , private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private activatedRoute: ActivatedRoute) {
    this.page = new PageModel(0, 0, 0, 0);
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.activatedRoute.params.subscribe(params => {
      this.selectedVechile = params['selectedVechile'] !== undefined ? params['selectedVechile'] : '';
    });
  }

  ngOnInit() {
    if (this.selectedVechile) {
      this.searchValue = this.selectedVechile;
      this.getTripTrackings(0, this.selectedVechile, this.formatDate); // need to remove param
    } else {
      this.getTripTrackings(0, '', this.formatDate); // need to remove param
    }
  }
  refreshPage() {
    this.searchValue = '';
    this.model = this.calendar.getToday();
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getTripTrackings(0, '', this.formatDate); // need to remove param
  }
  btnShowFilters() {
    this.showFilters = !this.showFilters;
  }
  pageChanged(event) {
    this.p = event;
    this.getTripTrackings(this.p - 1, this.searchValue, this.formatDate); // need to remove param
  }

  searchData() {
    if (this.searchValue !== undefined) { // need to remove param
      this.getTripTrackings(0, this.searchValue, '');
      this.showSearchClear = (this.searchValue.length > 4);
    }
  }

  changeDate() {
    this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
    this.getTripTrackings(0, this.searchValue, this.formatDate); // need to remove param
  }

  clearSearch() {
    this.searchValue = '';
    this.showSearchClear = false;
    this.searchData();
  }


  tripdetails(tripdetails) {
    const modalRef = this.modalService.open(TripComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.trackingid = tripdetails.sourceId;
  }
  getTripTrackings(page: number, searchValue: string, selectDate: string) { // need to remove param
    // this.selected = noDateFlag ? this.selected : '';
    this.tripTrackingApiService.getAll(page, 10, selectDate, searchValue).subscribe((data: PaginationModel) => {
      this.tripTrackingArray = data.content;
      this.page = data.page;
      console.log(this.tripTrackingArray);
    });
  }

}
