import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessPageComponent } from './success-page/success-page.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path: 'submit', component: SuccessPageComponent},
  {path: '', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
