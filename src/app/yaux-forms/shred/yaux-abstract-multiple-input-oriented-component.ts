import {Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YauxAbstractInputOrientedComponent } from './yaux-abstract-form-input-oriented-element';
import { MultipleInputItem } from './model/yaux-tem';
import { FormControl, FormGroup } from '@angular/forms';

export class YauxAbstractMultipleInputOrientedComponent extends YauxAbstractInputOrientedComponent implements OnInit {

  @Input() items: MultipleInputItem[];

  @Input() itemsObservable: Observable<MultipleInputItem[]>;

  internalFormGroup: FormGroup = new FormGroup({});

  ngOnInit() {
    super.ngOnInit();

    if (this.value) {
      this.formControl.setValue(this.value);
    }

    if (this.items.length === 0 && this.itemsObservable) {
      this.itemsObservable.subscribe(
        (items) => {
          this.items = items;
          this.processItems();
        },
        (error) => {
          this.items = [];
          console.log(error);
        }
      );
    } else {
      this.processItems();
    }
  }

  onInputClicked(selItem: MultipleInputItem, value: any): void {
    const tmpValue = [];

    this.items.forEach((item) => {
      if (selItem.id === item.id) {
        item.selected = (value !== null);
        item.value = value;
      }

      if (item.selected) {
        tmpValue.push(item.value);
      }
    });

    this.updateValue(tmpValue, value);

    if (this.hasValidation) {
      this.formControl.markAsTouched();
      this.formControl.setValue(this.value);
    }

    this.valueChange.emit(this.value);
  }

  protected processItems() {
    if (this.items.length > 0) {
      this.items.forEach((item) => {
        if (!item.inputValue) {
          item.inputValue = item.value;
        }

        if (this.isMultiple()) {
          if (this.value && (this.value.indexOf(item.value) > -1)) {
            item.selected = true;
            item.value = item.inputValue;
          } else {
            item.selected = true;
            item.value = null;
          }
        } else {
          item.value = this.value;
        }

        this.internalFormGroup.setControl(item.id, new FormControl('', []));
      });
    }
  }

  protected isMultiple(): boolean {
    return this.items.length > 0;
  }

  protected updateValue(tmpValue: any[], value: any): any {
    if (this.isMultiple()) {
      this.value = (tmpValue.length > 0) ? tmpValue : null;
    } else {
      this.value = value;
    }
  }
}
