import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AvailableBusesComponent } from './components/available-buses/available-buses.component';
import { SelectedSeatsComponent } from './components/selected-seats/selected-seats.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path:'availablebuses',component: AvailableBusesComponent, canActivate: [AuthGuard]},
  {path:'buses/:id',component: SelectedSeatsComponent, canActivate: [AuthGuard]},
  {path:'passengerInfo', component: PassengerInfoComponent, canActivate: [AuthGuard]},
  {path: 'journeyDetails/:id', component: JourneySummaryComponent, canActivate: [AuthGuard]},
  {path: 'viewticket/:id', component: ViewTicketComponent, canActivate: [AuthGuard]},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
