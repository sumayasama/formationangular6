import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    children: [
      {path: '', redirectTo: 'detail', pathMatch: 'full'},
      {path: 'detail', component: DetailPrestationComponent},
      {path: 'comment', component: CommentPrestationComponent}, { path: 'add', component : PageAddPrestationComponent }
    ]
 },
  { path: 'add', component : PageAddPrestationComponent }];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule { }
