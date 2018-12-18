import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page-login/page-login.component';

const routes: Routes = [];

// definition des routes
const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '',
    redirectTo: '/login' ,
  pathMatch : 'full'
},
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule', // charger automatiquement des modules
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  // Diagnostic only: inspect router configuration
  constructor(router: Router) {// injection de router dans notre module
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value; // formatage de l'affichage

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  } }
