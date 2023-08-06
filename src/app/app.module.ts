import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AvailableBusesComponent } from './components/available-buses/available-buses.component';
import { SelectedSeatsComponent } from './components/selected-seats/selected-seats.component';
import { SeatNamePipe } from './pipes/seatname.pipe';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { BackComponent } from './common/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AvailableBusesComponent,
    SelectedSeatsComponent,
    SeatNamePipe,
    PassengerInfoComponent,
    JourneySummaryComponent,
    ViewTicketComponent,
    NotFoundComponent,
    FooterComponent,
    BackComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
