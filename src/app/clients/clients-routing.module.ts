import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PagePageNotFoundComponent } from '../page-not-found/page-page-not-found/page-page-not-found.component';
const appRoute = [{path : '' , component : PageClientsComponent},
{ path: 'add', component : PagePageNotFoundComponent }];

@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(appRoute)  ]
})
export class ClientsRoutingModule { }
