import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PagePageNotFoundComponent } from '../page-not-found/page-page-not-found/page-page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },
  { path: 'add', component : PagePageNotFoundComponent }];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule { }
