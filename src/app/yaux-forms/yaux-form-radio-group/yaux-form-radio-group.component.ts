import { Component, OnInit } from '@angular/core';
import {YauxAbstractMultipleInputOrientedComponent} from '../shred/yaux-abstract-multiple-input-oriented-component';

@Component({
  selector: 'yaux-form-radio-group',
  templateUrl: './yaux-form-radio-group.component.html',
  styleUrls: ['./yaux-form-radio-group.component.sass']
})
export class YauxFormRadioGroupComponent extends YauxAbstractMultipleInputOrientedComponent {

  protected isMultiple(): boolean {
    return false;
  }
}
