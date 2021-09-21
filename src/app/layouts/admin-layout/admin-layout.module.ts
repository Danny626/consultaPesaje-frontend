import { NgModule } from '@angular/core';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from 'app/components/components.module';
import { PesajesModule } from 'app/pages/pesajes/pesajes.module';

@NgModule({
  imports: [
    RouterModule,
    AdminLayoutRoutes,
    ComponentsModule,
    PesajesModule
    // RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule {}
