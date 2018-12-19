import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';

@NgModule({
  declarations: [PageClientsComponent,  ListClientsComponent, ItemClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    PageNotFoundModule

  ]
})
export class ClientsModule { }
