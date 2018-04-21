import { Component, OnInit, Input } from '@angular/core';

import { YauxAbstractInputOrientedComponent } from '../shred/yaux-abstract-form-input-oriented-element';

@Component({
  selector: 'yaux-form-checkbox',
  templateUrl: './yaux-form-checkbox.component.html',
  styleUrls: ['./yaux-form-checkbox.component.sass']
})
export class YauxFormCheckboxComponent extends YauxAbstractInputOrientedComponent implements OnInit {

  @Input() checkboxValue: any;

  checked = false;

  ngOnInit() {
    super.ngOnInit();

    if (this.checkboxValue) {
      this.checked = this.value === this.checkboxValue;
    } else {
      this.checked = this.value;
    }
  }

  onValueChange(event): void {
    this.checked = event.target.checked;

    if (this.checkboxValue) {
      if (this.checked) {
        this.value = this.checkboxValue;
      } else {
        this.value = null;
      }

      this.valueChange.emit(this.value);
    } else {
      this.valueChange.emit(this.checked);
    }
  }
}
