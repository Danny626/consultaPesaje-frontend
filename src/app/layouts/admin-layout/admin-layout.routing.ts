import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';

import { PesajesComponent } from 'app/pages/pesajes/pesajes.component';

import { GuardService } from 'app/_service/services';


const routes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [
        { 
            path: 'pesajes',        
            component: PesajesComponent, 
            canActivate: [GuardService] 
        },
        {
            path: '',
            redirectTo: 'pesajes',
            pathMatch: 'full',
        },
        /*{ 
        path: '**',
        component: NotFoundComponent,
        }, */
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
  })
export class AdminLayoutRoutes { }
