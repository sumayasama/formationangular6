import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

// definition des routes
const appRoutes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' }, // instancier un component que son module est déja importé
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
  imports: [RouterModule.forRoot(appRoutes,
    {    preloadingStrategy: PreloadAllModules
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {  // Diagnostic only: inspect router configuration
  constructor(router: Router) {// injection de router dans notre module
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value; // formatage de l'affichage

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  } }
