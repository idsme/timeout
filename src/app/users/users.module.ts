import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '../../../node_modules/@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FormInputReactiveModule} from '../form-input-reactive/form-input-reactive.module';

export const MODULES = [
//  CommonModule,
//  HttpClientModule,
//  FormsModule,
//  ReactiveFormsModule,
//  RouterModule,
];

@NgModule({
  imports: [MODULES, FormInputReactiveModule],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
