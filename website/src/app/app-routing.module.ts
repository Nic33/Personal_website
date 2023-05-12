import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
/*import { ContactComponent } from './contact/contact.component'; */

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'account', component: AccountComponent },
 
 { path: 'sign-in', component: SignInComponent },
 { path: 'register-user', component: SignUpComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'forgot-password', component: ForgotPasswordComponent },
 { path: 'verify-email-address', component: VerifyEmailComponent },
/*  { path: 'contact', component: ContactComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
