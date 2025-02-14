import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesampleComponent } from './observablesample/observablesample.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { DatapassingComponent } from './datapassing/datapassing.component';
import { FirstdemoComponent } from './firstdemo/firstdemo.component';
import { DatabindingsComponent } from './databindings/databindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { NameComponent } from './name/name.component';
import { ParenttComponent } from './parentt/parentt.component';
import { ChildComponent } from './child/child.component';
import { PipessComponent } from './pipess/pipess.component';
import { SignupComponent } from './signup/signup.component';
import { ServicessComponent } from './servicess/servicess.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { CallbackComponent } from './callback/callback.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './bus/bus.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserService } from './services/user.service';
import { BookingService } from './services/booking.service';
import { BusService } from './services/bus.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TravelRequestListComponent } from './travel-request-list/travel-request-list.component';
import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NavbarComponent,
    HomeComponent,
    ObservablesampleComponent,
    ProductlistComponent,
    FormsComponent,
    DatapassingComponent,
    FirstdemoComponent,
    DatabindingsComponent,
    DirectivesComponent,
    WelcomeComponent,
    ProductsComponent,
    NameComponent,
    ParenttComponent,
    ChildComponent,
    PipessComponent,
    SignupComponent,
    ServicessComponent,
    ChatgptComponent,
    CallbackComponent,
    TemplatedrivenComponent,
    UserRegistrationComponent,
    BookingComponent,
    BusComponent,
    UserAuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserProfileComponent,
    TravelRequestListComponent,
    TravelRequestCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService,BookingService,BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
