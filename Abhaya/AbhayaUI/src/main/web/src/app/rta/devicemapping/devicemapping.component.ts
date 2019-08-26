import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginationModel } from '../../shared/pagination.model';
import { Vehicle } from '../../shared/drivers/vehicle.model';
import { VehicleApiService } from '../../shared/vehicles/services/vehicle.api.service';
import { IoTMappingModel } from './iotmapping.model';
declare let jsPDF;
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-devicemapping',
  templateUrl: './devicemapping.component.html',
  styleUrls: ['./devicemapping.component.css']
})
export class DevicemappingComponent implements OnInit, OnDestroy {

  showQrCode = false;
  mapDeviceFlag = false;
  vehicleArray: Array<Vehicle> = [];
  iotMappingModel: IoTMappingModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private vehicleApiService: VehicleApiService) {
    this.activatedRoute.params.subscribe(params => {
      this.iotMappingModel = new IoTMappingModel(params['serialNumber'], params['rcNumber']);
      this.getVehicleDetails();
    });
  }

  ngOnInit() {
  }

  getVehicleDetails() {
    this.vehicleApiService.getVehicleDetails(this.iotMappingModel.rcNumber).subscribe((data: PaginationModel) => {
      this.vehicleArray = data.content;
    });
  }

  ngOnDestroy() {
  }

  showQRCode() {
    this.mapDeviceFlag = !this.mapDeviceFlag;
  }

  downloadpdf() {
    const data = document.getElementById('qrcode');
    html2canvas(data).then(canvas => {
      const imgWidth = 211;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/JPEG');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight);
      pdf.save(this.iotMappingModel.rcNumber + '.pdf');
    });

  }

  mapDevice() {
    if (this.mapDeviceFlag) {
      this.vehicleApiService.mapToIotDevice(JSON.stringify(this.iotMappingModel)).subscribe((data: any) => {
        this.showQrCode = true;
      });
    }
  }

  navigate() {
    this.router.navigate(['/rta/dashboard']);
  }
}
