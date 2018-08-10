import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingPeriodPageLayoutComponent } from './working-period-page-layout/working-period-page-layout.component';
import { WorkedPeriodItemComponent } from './working-period-page-layout/worked-period-item/worked-period-item.component';
import { WorkedPeriodHeaderComponent } from './working-period-page-layout/worked-period-header/worked-period-header.component';
import { WorkedPeriodFooterComponent } from './working-period-page-layout/worked-period-footer/worked-period-footer.component';
import { WorkedPeriodTotalsComponent } from './working-period-page-layout/worked-period-totals/worked-period-totals.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkingPeriodPageLayoutComponent, WorkedPeriodItemComponent, WorkedPeriodHeaderComponent, WorkedPeriodFooterComponent, WorkedPeriodTotalsComponent]
})
export class HoursmadeModule { }
