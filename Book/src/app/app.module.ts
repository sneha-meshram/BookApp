import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';
//import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {HomeservicesService} from'./services/homeservices.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RecommendComponent } from './recommend/recommend.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AuthService } from './services/auth.service';
import { AuthenticationService } from './services/authentication.service';
import { CanactivateGuard } from './canactivate.guard';
import { FooterComponent } from './footer/footer.component';
const routes: Routes =[
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
  path:'header',
  component:HeaderComponent
  },
  {
  path:'dashboard',
  component:DashboardComponent
  },
  {
  path:'home',
  component:HomeComponent
  },
  {
  path:'login',
  component:LoginComponent
  },
  {
  path:'sign-up',
  component:SignUpComponent
  },
  {
  path:'profile',
  component:ProfileComponent
  },
  {
  path:'dashboard2',
  component:Dashboard2Component,
  canActivate: [CanactivateGuard],
  },
  {
  path:'recommend',
  component:RecommendComponent,
  canActivate: [CanactivateGuard],
  },
  {
  path:'favourite',
  component:FavouriteComponent,
  canActivate: [CanactivateGuard],
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    HomeComponent,
    RecommendComponent,
    Dashboard2Component,
    FavouriteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxPaginationModule,
    MatToolbarModule
  ],
  providers: [AuthenticationService,
    HomeservicesService,AuthService,CanactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
