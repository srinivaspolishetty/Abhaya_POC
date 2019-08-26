import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from "../../util/toaster.service";
import { SuspiciousVehicleServiceApi } from "../../../services/suspiciousvehicle.api";

@Component({
  selector: 'app-suspicious-vehicle',
  templateUrl: './suspicious-vehicle.component.html',
  styleUrls: ['./suspicious-vehicle.component.css']
})
export class SuspiciousVehicleComponent implements OnInit {

  model: any = {};
  vehicleNumber : string;
  constructor(public activeModal: NgbActiveModal, private SuspiciousVehicleService : SuspiciousVehicleServiceApi,
    private toasterService: ToasterService) { }

  ngOnInit() {
  }

  onSubmit() {
    const newobj = new Object({'rcNumber' : this.vehicleNumber})
    this.SuspiciousVehicleService.addSuspiciousVehicle(JSON.stringify(newobj))
    .subscribe((data: any) => {
      console.log(data.message);
      if(data.message == 'Success'){
        this.toasterService.showSuccess('bottom-right', 'Vehicle Number : '+this.vehicleNumber+' added to Suspicious Vehicles List.'); 
      }
      else{
        this.toasterService.showError('bottom-right', 'Unable to add Vehicle Number: '+this.vehicleNumber+' to Suspicious Vehicles List.'); 
      }
      this.activeModal.close('refreshContent');
      
    }, error => {
      console.log('Error', error);
      this.activeModal.close('Close click');
      this.toasterService.showError('bottom-right', 'Unable to add Vehicle Number: '+this.vehicleNumber+' to Suspicious Vehicles List.'); 
    });
  }
}
