import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagePageNotFoundComponent } from './pages/page-page-not-found/page-page-not-found.component';
const appRoute = [{path : '' , component : PagePageNotFoundComponent}];
@NgModule({
  imports: [
    RouterModule.forChild(appRoute)
  ]
})
export class PageNotFoundRoutingModule { }
