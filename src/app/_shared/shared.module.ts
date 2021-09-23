import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading/loading-dialog/loading-dialog.component';
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const sharedComponents = [LoadingDialogComponent, ErrorDialogComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [...sharedComponents],
  /* providers: [ErrorDialogService, LoadingDialogService], */
  entryComponents: [...sharedComponents],
})
export class SharedModule { }
