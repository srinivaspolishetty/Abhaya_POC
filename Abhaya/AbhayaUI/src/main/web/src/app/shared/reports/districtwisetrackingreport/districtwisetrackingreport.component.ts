import { Component, OnInit } from '@angular/core';
import { HorizontalBarChart } from '../../util/horizontalbar';
import { LiveTrackingServiceAPI } from '../../livetracking/services/livetracking.api.service';

@Component({
  selector: 'app-districtwisetrackingreport',
  templateUrl: './districtwisetrackingreport.component.html',
  styleUrls: ['./districtwisetrackingreport.component.css']
})
export class DistrictwisetrackingreportComponent implements OnInit {

  horizontalBarChart: HorizontalBarChart = new HorizontalBarChart([636, 375], true, true, false, false, false, false, true,
    'Label of X', 'Label of Y');

  constructor(private liveTrackingServiceAPI: LiveTrackingServiceAPI) {
    this.horizontalBarChart.colorScheme = { domain: ['#6742c0'] };
  }

  ngOnInit() {
  }

  getDistrictWiseTracking(stateId, searchDate) {
    this.liveTrackingServiceAPI.getMovementDetailsDistrictWise(stateId, true, searchDate)
      .subscribe((data: any) => {
        const newdataarray = data;
        const temparray = [];
        for (let i = 0; i < newdataarray.length; i++) {
          if (newdataarray[i].statusType === 'Running') {
            const newOj = { 'name': newdataarray[i].districtName, 'value': newdataarray[i].count };
            temparray.push(newOj);
          }
        }
        const districtNames = ['Anantapur', 'Chittor', 'East Godavari', 'Guntur', 'Ysr Kadapa', 'Kurnool', 'Nellore',
          'Prakasam', 'Srikakulam', 'Vizianagaram', 'West Godavari'];
        districtNames.forEach(function (value) {
          const newOj = { 'name': value, 'value': '0' };
          temparray.push(newOj);
        });
        this.horizontalBarChart.data = temparray;
      });
  }

}
