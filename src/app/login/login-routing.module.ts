import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
const appRoutes = [{ path : '', component : PageLoginComponent}];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginRoutingModule { }
