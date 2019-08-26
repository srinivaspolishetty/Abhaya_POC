import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rawdatadetails',
  templateUrl: './rawdatadetails.component.html',
  styleUrls: ['./rawdatadetails.component.css']
})
export class RawdatadetailsComponent implements OnInit {

  @Input() rawdataid;
  constructor(public activeModal: NgbActiveModal) { }

  selectedRawData;
  ngOnInit() {
    this.selectedRawData = this.rawdataid;
  }

}
