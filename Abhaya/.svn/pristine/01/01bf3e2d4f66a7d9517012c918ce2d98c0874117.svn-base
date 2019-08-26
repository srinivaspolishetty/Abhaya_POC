import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RtaModule } from './rta/rta.module';
import { PoliceModule } from './police/police.module';

const appRoutes: Routes = [
  {path: '', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'login', component: LoginComponent, data: {message: 'Login Page'}},
  { path: 'rta', loadChildren: () => RtaModule },
  { path: 'police', loadChildren: () => PoliceModule },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'} )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
