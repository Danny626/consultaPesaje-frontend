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


const routes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'user-profile',   component: UserProfileComponent },
        { path: 'table-list',     component: TableListComponent },
        { path: 'typography',     component: TypographyComponent },
        { path: 'icons',          component: IconsComponent },
        { path: 'notifications',  component: NotificationsComponent },
        { path: 'upgrade',        component: UpgradeComponent },
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
