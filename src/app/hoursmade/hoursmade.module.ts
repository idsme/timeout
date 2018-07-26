import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingPeriodPageLayoutComponent } from './working-period-page-layout/working-period-page-layout.component';
import { WorkedPeriodItemComponent } from './working-period-page-layout/worked-period-item/worked-period-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkingPeriodPageLayoutComponent, WorkedPeriodItemComponent]
})
export class HoursmadeModule { }
