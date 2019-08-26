import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { VehicleApiService } from '.././services/vehicle.api.service';

declare var google: any;

@Component({
  selector: 'app-vehiclemap',
  templateUrl: './vehiclemap.component.html',
  styleUrls: ['./vehiclemap.component.css']
})
export class VehiclemapComponent implements OnInit {
  @Input() vehiclelocation;
  noVehicle = false;
  vehicleLocationDetails;
  mapLocation: string;
  ismapped = true;
  lat;
  lng;
  iconURL = '/assets/images/ic_auto_yellow.png';

  map: any;

  constructor(private vehicleApiService: VehicleApiService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (this.vehiclelocation.serialNumber === undefined) {
      this.ismapped = false;
    } else {
      this.vehicleApiService.getVehicleLocation(this.vehiclelocation.serialNumber).subscribe((data: any) => {
        this.vehicleLocationDetails = data;
        this.ismapped = true;
        this.mapLocation = this.vehicleLocationDetails.location;
        console.log(this.mapLocation);
        this.lat = this.vehicleLocationDetails.latitude;
        this.lng = this.vehicleLocationDetails.langitude;
        if (this.lat === 0 || this.lng === 0) {
          this.noVehicle = true;
        }
        const position = new google.maps.LatLng(this.lat, this.lng);
        this.map.panTo(position);

      });
    }

  }
  mapReady(map) {
    this.map = map;
  }

  clickedMarker($event) {
    this.lat = $event.latitude;
    this.lng = $event.longitude;
    this.map.setCenter({ lat: this.lat, lng: this.lng });
    const position = new google.maps.LatLng($event.latitude, $event.longitude);
    this.map.panTo(position);
    this.map.setZoom(15);
  }

}
