import { Component, OnInit, Input } from '@angular/core';

import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-input-element';


@Component({
  selector: 'yaux-form-radio',
  templateUrl: './yaux-form-radio.component.html',
  styleUrls: ['./yaux-form-radio.component.sass']
})
export class YauxFormRadioComponent extends YauxAbstractInputFormComponent {

  @Input() inline = false;

}
