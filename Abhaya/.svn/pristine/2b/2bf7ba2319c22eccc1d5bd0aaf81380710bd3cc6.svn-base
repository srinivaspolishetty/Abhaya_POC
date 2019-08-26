import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanicSummary } from '../../panic-alerts-list/panicsummary.model';
import { LiveTrackingServiceAPI } from '../../livetracking/services/livetracking.api.service';

@Component({
  selector: 'app-panicdetailsreport',
  templateUrl: './panicdetailsreport.component.html',
  styleUrls: ['./panicdetailsreport.component.css']
})
export class PanicdetailsreportComponent implements OnInit {

  panicSummary: Array<PanicSummary> = [];
  videoPanicSummary: PanicSummary = new PanicSummary();
  webPanicSummary: PanicSummary = new PanicSummary();
  panicTotalCount: number;
  routeDeviationCount: number;

  constructor(private liveTrackingServiceAPI: LiveTrackingServiceAPI,
    private router: Router) { }

  ngOnInit() {
  }

  navigateToPanic(eventType, isClosed) {
    this.router.navigate(['/rta/panicalertslist'], { queryParams: { eventType: eventType, isClosed: isClosed } });
  }

  getrouteDeviationCount(value, searchDate, districtId) {
    this.liveTrackingServiceAPI.getRouteDeviationAndPanicCount(value, searchDate, districtId)
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].type === 'distressDetails') {
            this.panicTotalCount = data[i].count;
          }
        }
      });
  }

  getPanicSummary(districtId, cityId, searchDate) {
    const newSearchDate = searchDate.split('/').reverse().join('-');
    this.liveTrackingServiceAPI.getPanicSummary('', districtId, cityId, searchDate).subscribe((data: PanicSummary[]) => {
      this.panicSummary = data;
      this.webPanicSummary.openCount = 0;
      this.webPanicSummary.closedCount = 0;
      this.videoPanicSummary.closedCount = 0;
      this.videoPanicSummary.openCount = 0;
      for (let count = 0; count < this.panicSummary.length; count++) {
        if (this.panicSummary[count].eventSource === 'WEB') {
          if (this.panicSummary[count].isClosed) {
            this.webPanicSummary.closedCount += this.panicSummary[count].count;
          } else {
            this.webPanicSummary.openCount += this.panicSummary[count].count;
          }
        } else {
          if (this.panicSummary[count].isClosed) {
            this.videoPanicSummary.closedCount += this.panicSummary[count].count;
          } else {
            this.videoPanicSummary.openCount += this.panicSummary[count].count;
          }
        }

      }
      this.getrouteDeviationCount('', newSearchDate, districtId);
    });
  }
}
