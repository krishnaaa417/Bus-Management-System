import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { ObservablesampleComponent } from './observablesample/observablesample.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsComponent } from './forms/forms.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './bus/bus.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes : Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'home',component:HomeComponent},
  {path:'observablesample',component:ObservablesampleComponent},
  { path:'productlist',component:ProductlistComponent },
  {path:'forms',component:FormsComponent},
  { path: 'register', component: UserRegistrationComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'bus', component: BusComponent },
  { path: 'login', component: UserAuthenticationComponent },
  {path:'**',redirectTo:'home'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
