import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkingPeriodPageLayoutComponent} from './hoursmade/working-period-page-layout/working-period-page-layout.component';

const routes: Routes = [
  {path: '', component: WorkingPeriodPageLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
