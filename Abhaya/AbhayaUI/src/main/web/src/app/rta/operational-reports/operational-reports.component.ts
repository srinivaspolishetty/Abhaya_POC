import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehicleApiService } from '../../shared/vehicles/services/vehicle.api.service';
import { PaginationModel } from '../../shared/pagination.model';
import { LiveVehicle } from '../../shared/vehicles/livevehicle.model';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { District } from '../../shared/util/district.model';
import { City } from '../../shared/util/city.model';
import { MastersServicesApi } from '../../shared/util/services/masters.api';
import { UserDetails } from '../../login/userdetails.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

declare var google: any;

@Component({
  selector: 'app-operational-reports',
  templateUrl: './operational-reports.component.html',
  styleUrls: ['./operational-reports.component.css']
})
export class OperationalReportsComponent implements OnInit, OnDestroy {

  isdisable = false;
  districtModel: any;
  cityModel: any;
  districtArray: Array<District> = [];
  cityArray: Array<City> = [];
  userDetails: UserDetails;
  model: NgbDateStruct;

  lat = 16.53760681989354;
  lng = 80.6536762404969;
  iconURL = '/assets/images/ic_auto_yellow.png';

  liveVehicleArray: Array<LiveVehicle> = [];

  gMaps;
  map: any;
  zoom: 12;
  animation: string;

  constructor(private vehicleApiService: VehicleApiService, private calendar: NgbCalendar, private mastersServicesApi: MastersServicesApi) {
    this.gMaps = GoogleMapsAPIWrapper;
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.districtModel = '';
    this.cityModel = '';
    this.model = this.calendar.getToday();
  }

  getVehicle;
  ngOnInit() {
    this.getDistricts(this.userDetails.stateId);
    this.getLiveVehicles();
    this.getVehicle = setInterval(() => {
      this.getLiveVehicles();
    }, 10000);

  }



  getDistricts(value) {
    if (value === '') {
      this.districtArray = [];
    } else {
      this.mastersServicesApi.getDistricts(value).subscribe((data: District[]) => {
        this.districtArray = data;
        if (this.userDetails.userRoles[0].name === 'ROLE_ADMIN' && this.userDetails.cityId === undefined) {
          this.districtModel = this.userDetails.districtId;
          this.isdisable = true;
          // tslint:disable-next-line:no-shadowed-variable
          this.mastersServicesApi.getCities(this.userDetails.districtId).subscribe((data: City[]) => {
            this.cityArray = data;
            if (this.userDetails.districtName === 'Krishna') {
              const position = new google.maps.LatLng(16.53760681989354, 80.6536762404969);
              this.map.panTo(position);
              this.map.setZoom(12);
            } else {
              const position = new google.maps.LatLng(17.756685888509807, 83.3340305476379);
              this.map.panTo(position);
              this.map.setZoom(12);
            }


          });
        }
      });
    }
  }

  getCities(value, event: Event) {
    console.log(event);
    this.cityModel = '';
    if (value === '') {
      this.cityArray = [];
    }
    this.mastersServicesApi.getCities(value).subscribe((data: City[]) => {
      this.cityArray = data;
    });
    const selectedOptions = event.target['options']; // Need to remove this logic
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    if (selectElementText === 'Krishna') {
      const position = new google.maps.LatLng(16.53760681989354, 80.6536762404969);
      this.map.panTo(position);
      this.map.setZoom(12);
    } else {
      const position = new google.maps.LatLng(17.756685888509807, 83.3340305476379);
      this.map.panTo(position);
      this.map.setZoom(12);
    }
  }



  mapReady(map) {
    this.map = map;
    // const oldposition = new google.maps.LatLng(17.763933, 83.329420);
    // const newposition = new google.maps.LatLng(17.763793, 83.329987);
    // this.angle = google.maps.geometry.spherical.computeHeading(oldposition, newposition);
    // console.log(Math.ceil(this.angle));
  }
  clickedMarker(label: string, index: number, $event) {
    this.lat = $event.latitude;
    this.lng = $event.longitude;
    this.map.setCenter({ lat: $event.latitude, lng: $event.longitude });
    const position = new google.maps.LatLng($event.latitude, $event.longitude);
    this.map.panTo(position);
    this.map.setZoom(15);
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  getLiveVehicles() {
    this.vehicleApiService.getLiveVehicles(this.userDetails.stateId).subscribe((data: PaginationModel) => {
      this.liveVehicleArray = data.content;
      console.log(this.liveVehicleArray.length);
      this.prepareDatatoDispaly();
    });
  }

  cityChange(event: Event) {
    const selectedOptions = event.target['options']; // Need to remove this logic
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    if (selectElementText === 'Vijayawada') {
      this.lat = 16.5062;
      this.lng = 80.6480;
    } else {
      this.lat = 17.6868;
      this.lng = 83.2185;
    }
  }

  prepareDatatoDispaly() {
    for (let current = 0; current < this.liveVehicleArray.length; current++) {
      const curLiveVehicle = this.liveVehicleArray[current];
      const oldposition = new google.maps.LatLng(curLiveVehicle.prevLatitude, curLiveVehicle.prevLangitude);
      const newposition = new google.maps.LatLng(curLiveVehicle.latitude, curLiveVehicle.langitude);
      let angle = google.maps.geometry.spherical.computeHeading(oldposition, newposition);
      angle = Math.round(angle);
      angle = Math.ceil(angle / 5) * 5;
      if (angle > 180) {
        angle = 180;
      }
      if (angle < -180) {
        angle = -180;
      }
      curLiveVehicle.image = `/assets/images/auto_icons/${angle}deg.svg`;
      console.log(curLiveVehicle.serialNumber + '    ' + curLiveVehicle.image);
      // angle = this.calcuateDegree(curLiveVehicle.prevLatitude, curLiveVehicle.prevLangitude,
      //   curLiveVehicle.latitude, curLiveVehicle.langitude);
      // console.log('Manual calucaltion                       ' + angle);
    }
  }

  private calcuateDegree(oldLatitude, oldLangitude, curLatitude, curLangitude) {
    const pi = Math.PI;
    const lat1: number = oldLatitude * pi / 180;
    const long1: number = oldLangitude * pi / 180;
    const lat2: number = curLatitude * pi / 180;
    const long2: number = curLangitude * pi / 180;
    const dLon: number = (long2 - long1);
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    let brng = Math.atan2(y, x);
    // brng = Math.toDegrees(brng);
    brng = brng * (180 / pi);
    brng = (brng + 360) % 360;

    return brng;
  }

  ngOnDestroy() {
    if (this.getVehicle) {
      clearInterval(this.getVehicle);
    }
  }
}
