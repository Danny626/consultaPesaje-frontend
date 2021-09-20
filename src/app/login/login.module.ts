import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        /* CommonModule */
    ],
    declarations: [
        LoginComponent,
    ],
})
export class LoginModule { }
