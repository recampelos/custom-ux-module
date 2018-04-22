import { Component, Input } from '@angular/core';

import {YauxAbstractSingleInputOrientedComponent} from '../shred/yaux-abstract-single-input-oriented-element';


@Component({
  selector: 'yaux-form-radio',
  templateUrl: './yaux-form-radio.component.html',
  styleUrls: ['./yaux-form-radio.component.sass']
})
export class YauxFormRadioComponent extends YauxAbstractSingleInputOrientedComponent {

  protected updateSelectedState(): void {
    this.selected = (this.value === this.inputValue);
  }

  protected processValue(): void {
    if (this.selected) {
      this.value = this.inputValue;
    } else {
      this.value = null;
    }
  }
}
