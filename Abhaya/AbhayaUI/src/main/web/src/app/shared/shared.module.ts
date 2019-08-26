import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxToggleModule} from 'ngx-toggle';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { FooterComponent } from './footer/footer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverDutyComponent } from './driver-duty/driver-duty.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { TripTrackingComponent } from './trip-tracking/trip-tracking.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { DriverComponent } from './drivers/driver/driver.component';
import { ClosedTripsComponent } from './trip-details/closed-trips/closed-trips.component';
import { PanicAlertsListComponent } from './panic-alerts-list/panic-alerts-list.component';
import { SafePipe } from './util/safepipe ';
import { OpentripsComponent } from './trip-details/opentrips/opentrips.component';
import { TripVehicleDetailsComponent } from './trip-details/trip-vehicle-details/trip-vehicle-details.component';
import { PanicAlertComponent } from './panic-alerts-list/panic-alert/panic-alert.component';
import { SuspiciousVehiclesComponent } from './suspicious-vehicles/suspicious-vehicles.component';
import { RouteDeviationComponent } from './route-deviation/route-deviation.component';
import { SuspiciousVehicleComponent } from './suspicious-vehicles/suspicious-vehicle/suspicious-vehicle.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { UserComponent } from './usermanagement/user/user.component';
import { TripComponent } from './trip-tracking/trip/trip.component';
import { RawdataComponent } from './rawdata/rawdata.component';
import { ModemdetailsComponent } from './modemdetails/modemdetails.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { RawdatadetailsComponent } from './rawdata/rawdatadetails/rawdatadetails.component';
import { LivetrackingComponent } from './livetracking/livetracking.component';
import { AdministrativeListComponent } from './administrative-list/administrative-list.component';
import { AdministrativeComponent } from './administrative-list/administrative/administrative.component';
import { QRCodeModule } from 'angularx-qrcode';
import { VehiclemapComponent } from './vehicles/vehiclemap/vehiclemap.component';
import { DriverdetailsComponent } from './drivers/driverdetails/driverdetails.component';
import { DriverdetailsviewComponent } from './drivers/driverdetailsview/driverdetailsview.component';
import { RoutedeviationviewComponent } from './route-deviation/routedeviationview/routedeviationview.component';
import { VehicleauthdriversComponent } from './vehicles/vehicleauthdrivers/vehicleauthdrivers.component';
import { DevicecommunitationComponent } from './devicecommunitation/devicecommunitation.component';
import { MovementdetailsComponent } from './movementdetails/movementdetails.component';
import { TripandroutedeviationComponent } from './reports/tripandroutedeviation/tripandroutedeviation.component';
import { MovementdetailsreportComponent } from './reports/movementdetailsreport/movementdetailsreport.component';
import { MovementgraphreportComponent } from './reports/movementgraphreport/movementgraphreport.component';
import { VehicleAuthreportComponent } from './reports/vehicle-authreport/vehicle-authreport.component';
import { PanicdetailsreportComponent } from './reports/panicdetailsreport/panicdetailsreport.component';
import { DistrictwisetrackingreportComponent } from './reports/districtwisetrackingreport/districtwisetrackingreport.component';
import { DevicecommunicatingreportComponent } from './reports/devicecommunicatingreport/devicecommunicatingreport.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    NgxToggleModule,
    AgmCoreModule,
    AgmDirectionModule,
    NgxChartsModule,
    QRCodeModule
  ],
  declarations: [FooterComponent, VehiclesComponent, DriversComponent, DriverDutyComponent,
     VehicleComponent, TripTrackingComponent, TripDetailsComponent, DriverComponent, ClosedTripsComponent, PanicAlertsListComponent,
    SafePipe, OpentripsComponent, TripVehicleDetailsComponent, PanicAlertComponent, SuspiciousVehiclesComponent, RouteDeviationComponent,
    SuspiciousVehicleComponent, UsermanagementComponent, UserComponent, TripComponent, RawdataComponent, ModemdetailsComponent,
    ShowVideoComponent, RawdatadetailsComponent, LivetrackingComponent, AdministrativeListComponent, AdministrativeComponent,
    VehiclemapComponent, DriverdetailsComponent, DriverdetailsviewComponent, RoutedeviationviewComponent, VehicleauthdriversComponent,
    DevicecommunitationComponent, MovementdetailsComponent, TripandroutedeviationComponent, MovementdetailsreportComponent,
    MovementgraphreportComponent, VehicleAuthreportComponent, PanicdetailsreportComponent, DistrictwisetrackingreportComponent,
    DevicecommunicatingreportComponent],
  exports: [FooterComponent, DevicecommunicatingreportComponent],
  entryComponents: [VehicleComponent, DriverComponent, SuspiciousVehicleComponent, UserComponent, TripComponent, RawdatadetailsComponent,
     AdministrativeComponent, VehiclemapComponent, DriverdetailsviewComponent, RoutedeviationviewComponent, VehicleauthdriversComponent]
})
export class SharedModule { }
