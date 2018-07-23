import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkingPeriodPageLayoutComponent} from './hoursmade/working-period-page-layout/working-period-page-layout.component';
import {UsersComponent} from './users/users.component';
import {UsersModule} from './users/users.module';
import {listLazyRoutes} from '@angular/compiler/src/aot/lazy_routes';
import {SharedModule} from '../shared/shared.module';
import {SharedRoutingModule} from '../shared/shared-routing.module';

const routes: Routes = [
  {path: '', component: WorkingPeriodPageLayoutComponent},
  {path: 'users', component: UsersComponent},
  {path: 'about', loadChildren: '../shared/shared.module#SharedModule'},
];
// {path: 'recepten', loadChildren: './recipes/recipes.module#RecipesModule'},

@NgModule({
  imports: [
    SharedRoutingModule,
    RouterModule.forRoot(routes),
    UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
