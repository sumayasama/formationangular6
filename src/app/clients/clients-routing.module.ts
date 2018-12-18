import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClientsComponent } from './page-clients/page-clients.component';
const appRoute = [{path : '' , component : PageClientsComponent}];
@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(appRoute)  ]
})
export class ClientsRoutingModule { }
