import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YauxAbstractInputOrientedComponent } from '../shred/yaux-abstract-form-input-oriented-element';
import { YauxTranslateKeyCreator } from '../../yaux-translate/shared/yaux-translate-key-creator';
import {CheckBoxItem, Item} from '../shred/model/yaux-tem';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'yaux-form-checkbox-group',
  templateUrl: './yaux-form-checkbox-group.component.html',
  styleUrls: ['./yaux-form-checkbox-group.component.sass']
})
export class YauxFormCheckboxGroupComponent extends YauxAbstractInputOrientedComponent implements OnInit {

  @Input() items: CheckBoxItem[];

  @Input() itemsObservable: Observable<CheckBoxItem[]>;

  internalFormGroup: FormGroup = new FormGroup({});

  ngOnInit() {
    super.ngOnInit();

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

  protected processItems() {
    if (this.items.length > 0) {
      this.items.forEach((item) => {
        if (item.key) {
          item.checkBoxValue = item.value;

          if (this.value && this.value.indexOf(item.value)) {
            item.value = null;
          }

          this.internalFormGroup.setControl(item.key, new FormControl('', []));
        }
      });
    }
  }

  onCheckBoxClicked(selItem: CheckBoxItem, value: any): void {
    this.value = [];

    this.items.forEach((item) => {
      if (selItem.key === item.key) {
        item.value = value;
      }

      if (item.value) {
        this.value.push(item.value);
      }
    });

    this.value = (this.value.length > 0) ? this.value : null;

    if (this.hasValidation) {
      this.formControl.markAsTouched();
      this.formControl.setValue(this.value);
    }

    this.valueChange.emit(this.value);
  }
}
