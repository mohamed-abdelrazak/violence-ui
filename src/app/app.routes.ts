import { Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { LoginComponent } from './components/login/login.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Admin Routes
  { path: 'admin', component: AdminComponent, children: [] },

  // User Routes
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'industries', component: IndustriesComponent },
      { path: 'technology', component: TechnologyComponent },
    ],
  },
];




