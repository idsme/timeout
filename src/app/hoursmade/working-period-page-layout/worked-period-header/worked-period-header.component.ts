import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-worked-period-header',
  templateUrl: './worked-period-header.component.html',
  styleUrls: ['./worked-period-header.component.scss']
})
export class WorkedPeriodHeaderComponent implements OnInit {

  @Input()
  monthName;

  @Input()
  consultantName;

  @Input()
  clientName;

  @Input()
  projectName;

  constructor() { }

  ngOnInit() {
  }

}
