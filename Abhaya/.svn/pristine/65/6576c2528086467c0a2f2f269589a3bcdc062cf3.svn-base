import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from '../shared/vehicles/vehicles.component';
import { DriversComponent } from '../shared/drivers/drivers.component';
import { ClosedTripsComponent } from '../shared/trip-details/closed-trips/closed-trips.component';

const policeRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
      , { path: 'vehicles', component: VehiclesComponent }
      , { path: 'drivers', component: DriversComponent }
      , { path: 'closedtrips', component: ClosedTripsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(policeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PoliceRoutingModule { }
