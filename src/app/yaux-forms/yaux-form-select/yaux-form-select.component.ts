import { Component, OnInit, Input } from '@angular/core';

import { YauxAbstractSelectComponent } from '../shred/yaux-abstract-form-input-select-element';
import { YauxTranslateKeyCreator } from '../../yaux-translate/shared/yaux-translate-key-creator';




@Component({
  selector: 'yaux-form-select',
  templateUrl: './yaux-form-select.component.html',
  styleUrls: ['./yaux-form-select.component.sass']
})
export class YauxFormSelectComponent extends YauxAbstractSelectComponent implements OnInit {

  @Input() multiple = false;

  protected processItems() {
    this.options.push({
      key: YauxTranslateKeyCreator.createFormLabelKey('defaultOpition'),
      value: null
    });

    super.processItems();
  }

}
