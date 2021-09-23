import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { PesajesModule } from 'app/pages/pesajes/pesajes.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
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
