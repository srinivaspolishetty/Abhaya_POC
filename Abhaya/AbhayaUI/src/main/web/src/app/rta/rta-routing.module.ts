import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from '../shared/vehicles/vehicles.component';
import { DriversComponent } from '../shared/drivers/drivers.component';
import { DriverDutyComponent } from '../shared/driver-duty/driver-duty.component';
import { TripTrackingComponent } from '../shared/trip-tracking/trip-tracking.component';
import { TripDetailsComponent } from '../shared/trip-details/trip-details.component';
import { DevicemappingComponent } from './devicemapping/devicemapping.component';
import { ClosedTripsComponent } from '../shared/trip-details/closed-trips/closed-trips.component';
import { OperationalReportsComponent } from './operational-reports/operational-reports.component';
import { PanicAlertsListComponent } from '../shared/panic-alerts-list/panic-alerts-list.component';
import { ReportsComponent } from './reports/reports.component';
import { OpentripsComponent } from '../shared/trip-details/opentrips/opentrips.component';
import { PanicAlertComponent } from '../shared/panic-alerts-list/panic-alert/panic-alert.component';
import { SuspiciousVehiclesComponent } from '../shared/suspicious-vehicles/suspicious-vehicles.component';
import { RouteDeviationComponent } from '../shared/route-deviation/route-deviation.component';
import { UsermanagementComponent } from '../shared/usermanagement/usermanagement.component';
import { RawdataComponent } from '../shared/rawdata/rawdata.component';
import { ModemdetailsComponent } from '../shared/modemdetails/modemdetails.component';
import { ShowVideoComponent } from '../shared/show-video/show-video.component';
import { LivetrackingComponent } from '../shared/livetracking/livetracking.component';
import { AdministrativeListComponent } from '../shared/administrative-list/administrative-list.component';
import { DevicecommunitationComponent } from "../shared/devicecommunitation/devicecommunitation.component";
import { MovementdetailsComponent } from "../shared/movementdetails/movementdetails.component";
import { AuthGuard } from "../authgaurd/authguard.service";

const rtaRoutes: Routes = [
  { path: '',  component: MainComponent, canActivate: [AuthGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent}
      , { path: 'vehicles', component: VehiclesComponent}
      , { path: 'drivers', component: DriversComponent}
      , { path: 'driverduty', component: DriverDutyComponent}
      , { path: 'tripTracking', component: TripTrackingComponent}
      , { path: 'tripDetails', component: TripDetailsComponent}
      , { path: 'devicemapping', component: DevicemappingComponent}
      , { path: 'closedtrips', component: ClosedTripsComponent}
      , { path: 'opentrips', component: OpentripsComponent}
      , { path: 'operationalreports', component: OperationalReportsComponent}
      , { path: 'panicalertslist', component: PanicAlertsListComponent}
      , { path: 'panicalert', component: PanicAlertComponent}
      , { path: 'reports', component: ReportsComponent}
      , { path: 'suspicious', component:  SuspiciousVehiclesComponent}
      , { path: 'routedeviation', component:  RouteDeviationComponent}
      , { path: 'usermanagement', component:  UsermanagementComponent}
      , { path: 'rawdata', component:  RawdataComponent}
      , { path: 'modemdetails', component:  ModemdetailsComponent}
      , { path: 'showvideo', component:  ShowVideoComponent}
      , { path: 'showvideos', component:  ShowVideoComponent}
      , { path: 'livetracking', component:  LivetrackingComponent}
      , { path: 'administrativelist', component:  AdministrativeListComponent}
      , { path: 'devicecommunitation', component:  DevicecommunitationComponent}
      , { path: 'movementdetails', component:  MovementdetailsComponent}
    ]
 }
];

@NgModule({
  imports: [
    RouterModule.forChild(rtaRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RtaRoutingModule { }
