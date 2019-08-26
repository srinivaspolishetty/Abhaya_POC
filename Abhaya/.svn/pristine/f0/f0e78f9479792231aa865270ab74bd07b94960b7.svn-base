import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {

  model: any = {};
  @Input() vehicleNumber;
  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
    this.model.rcNumber = this.vehicleNumber;
  }
  onSubmit() {
    this.activeModal.close();
    this.router.navigate(['/rta/devicemapping', {'rcNumber': this.model.rcNumber, 'serialNumber': this.model.serialNumber}]);
  }

}
