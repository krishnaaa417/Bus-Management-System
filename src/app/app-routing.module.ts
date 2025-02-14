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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';
import { TravelRequestListComponent } from './travel-request-list/travel-request-list.component';

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
 // { path: 'login', component: UserAuthenticationComponent },
 { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'travel-requests', component: TravelRequestListComponent },
  { path: 'create-request', component: TravelRequestCreateComponent },
  { path: 'authenticate', component: UserAuthenticationComponent },
  {path:'**',redirectTo:'home'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
