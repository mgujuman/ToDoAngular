import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component'

 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signIn', component: LoginComponent },
    { path: 'signUp', component: RegistrationComponent },

];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);