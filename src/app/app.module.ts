import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  imports: [
    /* BrowserAnimationsModule, */
    /* FormsModule, */
    /* ReactiveFormsModule, */
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    SharedModule
/*     AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }) */
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, 
      useValue: 'es-BO'
    }
  ]
})
export class AppModule { }
