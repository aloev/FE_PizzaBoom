import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ImagenPipe } from './pipe/imagen.pipe'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { InputSelectorComponent } from './components/input-selector/input-selector.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CardCheckoutComponent } from './components/card-checkout/card-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CarouselComponent,
    ModalComponent,
    ImagenPipe,
    PruebaComponent,
    InputSelectorComponent,
    CheckoutComponent,
    CardCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
