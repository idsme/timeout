import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-worked-period-footer',
  templateUrl: './worked-period-footer.component.html',
  styleUrls: ['./worked-period-footer.component.scss']
})
export class WorkedPeriodFooterComponent implements OnInit {

  @Input()
  signCityConsultant: string;
  @Input()
  signingDateConsultant: string;
  @Input()
  consultantName: string;
  @Input()
  signCityManager: string;
  @Input()
  signingDateManager: string;
  @Input()
  signingManager: string;


  constructor() { }

  ngOnInit() {
  }

}
