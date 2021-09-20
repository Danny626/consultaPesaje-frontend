import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { PesajesComponent } from 'app/pages/pesajes/pesajes.component';
import { GuardService } from 'app/_service/services';


const routes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [
        { 
            path: 'dashboard',      
            component: DashboardComponent, 
            canActivate: [GuardService] 
        },
        { 
            path: 'user-profile',   
            component: UserProfileComponent, 
            canActivate: [GuardService] 
        },
        { 
            path: 'table-list',     
            component: TableListComponent, 
            canActivate: [GuardService] 
        },
        { 
            path: 'typography',     
            component: TypographyComponent ,
            canActivate: [GuardService]
        },
        { 
            path: 'icons',          
            component: IconsComponent, 
            canActivate: [GuardService] 
        },
        { 
            path: 'notifications',  
            component: NotificationsComponent,
            canActivate: [GuardService]
        },
        { 
            path: 'upgrade',        
            component: UpgradeComponent, 
            canActivate: [GuardService] 
        },
        { 
            path: 'pesajes',        
            component: PesajesComponent, 
            canActivate: [GuardService] 
        },
        {
            path: '',
            redirectTo: 'dashboard',
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
