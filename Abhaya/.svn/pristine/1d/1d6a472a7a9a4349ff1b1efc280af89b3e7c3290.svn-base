import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveTrackingServiceAPI } from '../../livetracking/services/livetracking.api.service';

@Component({
  selector: 'app-tripandroutedeviation',
  templateUrl: './tripandroutedeviation.component.html',
  styleUrls: ['./tripandroutedeviation.component.css']
})
export class TripandroutedeviationComponent implements OnInit {

  routeDeviationCount: number;
  panicTotalCount: number;
  tripClosedCount: number;
  tripOpenCount: number;
  totalTripCount: number;

  constructor(private liveTrackingServiceAPI: LiveTrackingServiceAPI,
    private router: Router) { }

  ngOnInit() {
  }

  navigateTotripdetails(tripType) {
    this.router.navigate(['/rta/tripDetails'], { queryParams: { tripclosed: tripType } });
  }

  navigateToroutedeviation() {
    this.router.navigate(['/rta/routedeviation']);
  }

  getrouteDeviationCount(value, searchDate, districtId) {
    const newSearchDate = searchDate.split('/').reverse().join('-');
    this.liveTrackingServiceAPI.getRouteDeviationAndPanicCount(value, newSearchDate, districtId)
      .subscribe((data: any) => {
        this.routeDeviationCount = 0;
        this.panicTotalCount = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].type === 'routeDeviation') {
            this.routeDeviationCount = data[i].count;
          }
        }
        this.getTripSummary('false', newSearchDate, districtId);
      });
  }
  getTripSummary(value, searchDate, districtId) {
    this.liveTrackingServiceAPI.getTripSummanyForDboard(value, searchDate, districtId)
      .subscribe((data: any) => {
        this.tripClosedCount = 0;
        this.tripOpenCount = 0;
        this.totalTripCount = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].isClosed) {
            this.tripClosedCount = data[i].count;
          } else if (!data[i].isClosed) {
            this.tripOpenCount = data[i].count;
          }
        }
        this.totalTripCount = this.tripClosedCount + this.tripOpenCount;
      });
  }

}
