import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    /* BrowserAnimationsModule, */
    /* FormsModule, */
    /* ReactiveFormsModule, */
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule
/*     AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }) */
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
