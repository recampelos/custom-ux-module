import {Input, OnInit} from '@angular/core';

import {YauxAbstractInputOrientedComponent} from './yaux-abstract-form-input-oriented-element';

export class YauxAbstractSingleInputOrientedComponent extends YauxAbstractInputOrientedComponent implements OnInit {

  @Input() inputValue: any;

  selected = false;

  ngOnInit() {
    super.ngOnInit();

    this.updateSelectedState();
  }

  onValueChange(event): void {
    this.selected = event.target.checked;

    this.processValue();

    this.valueChange.emit(this.value);
  }

  protected updateSelectedState(): void {
    if (this.inputValue) {
      this.selected = this.value === this.inputValue;
    } else {
      this.selected = this.value;
    }
  }

  protected processValue(): any {
    if (this.inputValue) {
      if (this.selected) {
        this.value = this.inputValue;
      } else {
        this.value = null;
      }
    } else {
      this.value = this.selected;
    }
  }
}
