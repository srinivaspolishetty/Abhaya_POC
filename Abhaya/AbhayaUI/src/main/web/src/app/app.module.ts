import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpOptionsInterceptor } from './shared/util/http.options.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC79q-pUc8WbTxviL8GCu9agKR4Tl6PDEI'
      , libraries: ['geometry']
    }),
    ToastrModule.forRoot(),
    NgHttpLoaderModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpOptionsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
