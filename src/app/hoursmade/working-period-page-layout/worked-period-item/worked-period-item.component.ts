import {Component, Input, OnInit} from '@angular/core';
import {WorkedPeriod} from '../../worked-period';

@Component({
  selector: 'ids-worked-period-item',
  templateUrl: './worked-period-item.component.html',
  styleUrls: ['./worked-period-item.component.scss']
})
export class WorkedPeriodItemComponent implements OnInit {

  @Input()
  public workedPeriod: WorkedPeriod;

  constructor() { }

  ngOnInit() {
  }

}
