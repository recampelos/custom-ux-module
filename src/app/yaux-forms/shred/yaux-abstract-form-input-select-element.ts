// External modules
import { Input, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
// Internal modules
import { Item } from './model/yaux-tem';
import { YauxAbstractInputFormComponent } from './yaux-abstract-form-input-element';
import { YauxTranslateKeyCreator } from '../../yaux-translate/shared/yaux-translate-key-creator';


export class YauxAbstractSelectComponent extends YauxAbstractInputFormComponent implements OnInit {

  @Input() items: Item[] = [];

  @Input() itemsObservable: Observable<Item[]>;

  options: Item[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.items.length === 0 && this.itemsObservable) {
      console.log('Subscribing');

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
          item.key = YauxTranslateKeyCreator.createFormLabelKey(item.key);
          this.options.push(item);
        }
      });
    }
  }
}
