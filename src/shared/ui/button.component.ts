import {Component, Input} from '@angular/core';


@Component({
  selector: 'cp-button',
  template: `
    <a href="{{location}}">
      <span class="icon-left-open"></span>
      <span>{{buttonText}}</span>
    </a>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input()
  id: string;

  @Input()
  buttonText: string;

  @Input()
  location: string;

  constructor() {
  }

}
