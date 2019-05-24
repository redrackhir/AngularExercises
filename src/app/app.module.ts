import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../_services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AlertService } from 'src/_services/alertService';
import { UserService } from 'src/_services/user.service';
import { CheckinService } from 'src/_services/checkin.service'
import { LogoutComponent } from './logout/logout.component';
import { CheckmeComponent } from './checkme/checkme.component';
import { Error401Component } from './error401/error401.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' }
  },
  {
    path: 'checkme',
    component: CheckmeComponent,
    data: { title: 'Check' }
  },
  {
    path: '401',
    component: Error401Component,
    data: { title: 'Error' }
  }
 /*,
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CheckmeComponent,
    Error401Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }), // <-- debugging purposes only
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertService, LoginService, UserService, CheckinService],
  bootstrap: [AppComponent],

})
export class AppModule {}
