import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkingPeriodPageLayoutComponent} from './hoursmade/working-period-page-layout/working-period-page-layout.component';
import {UsersComponent} from './users/users.component';
import {UsersModule} from './users/users.module';

const routes: Routes = [
  {path: '', component: WorkingPeriodPageLayoutComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
