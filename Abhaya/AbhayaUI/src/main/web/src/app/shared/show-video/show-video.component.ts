import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PanicApiService } from '../panic-alerts-list/services/panic.alert.services';
import { PaginationModel } from '../pagination.model';
import { PanicAlert } from '../panic-alerts-list/panicalert.model';
import { PageModel } from '../page.model';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {

   public panicAlertArray: Array<PanicAlert> = [];
  public page: PageModel;
  public p: number;
  template = '';
  constructor(private panicApiService: PanicApiService) {
    this.page = new PageModel(0, 0, 0, 0);
  }

  ngOnInit() {
    this.template = `${environment.videoStream}`;
    this.getPanicVideoAlerts();
  }

  getPanicVideoAlerts() {
    this.panicApiService.getAllVideo().subscribe((data:  PaginationModel) => {
      this.panicAlertArray  =  data.content;
      this.page = data.page;
    });
  }

}
