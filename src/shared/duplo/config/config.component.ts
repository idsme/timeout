import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';



@Component({
  selector: 'ids-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  constructor(public configService: ConfigService) {
  }

}

