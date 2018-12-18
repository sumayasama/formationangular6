import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageLoginComponent } from './login/page-login/page-login.component';

const routes: Routes = [];

// definition des routes
const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },

  { path: '',
    redirectTo: '/login' ,
  pathMatch : 'full'
}
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
