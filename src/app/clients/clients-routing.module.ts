import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
const appRoute = [{path : '' , component : PageClientsComponent},
{ path: 'add', component : PageAddClientComponent }];

@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(appRoute)  ]
})
export class ClientsRoutingModule { }
