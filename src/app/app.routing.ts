import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const routes: Routes =[
  /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },  */
  /* {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }, */
  {
    path: 'pages',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module')
      .then(m => m.AdminLayoutModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [
    /* CommonModule, */
    /* BrowserModule, */
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
})
export class AppRoutingModule { }
