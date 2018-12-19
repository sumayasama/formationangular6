import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PageAddPrestationComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    PageNotFoundModule
  ]
})
export class PrestationsModule { }
