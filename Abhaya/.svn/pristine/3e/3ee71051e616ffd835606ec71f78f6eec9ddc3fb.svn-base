import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { QRCodeModule } from 'angularx-qrcode';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { RtaRoutingModule } from './rta-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { DevicemappingComponent } from './devicemapping/devicemapping.component';
import { OperationalReportsComponent } from './operational-reports/operational-reports.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from "../authgaurd/authguard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    NgxChartsModule,
    AgmCoreModule,
    AgmDirectionModule,
    RtaRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [MainComponent, HeaderComponent, DashboardComponent, NewregistrationComponent, DevicemappingComponent,
    OperationalReportsComponent,
    ReportsComponent],
  entryComponents: [NewregistrationComponent],
  providers: [AuthGuard]
})
export class RtaModule { }
