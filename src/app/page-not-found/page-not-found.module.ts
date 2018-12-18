import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePageNotFoundComponent } from './page-page-not-found/page-page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  declarations: [PagePageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
