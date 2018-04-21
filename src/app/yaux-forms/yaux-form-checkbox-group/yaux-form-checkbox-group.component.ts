import { Component, OnInit, Input } from '@angular/core';
import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-input-element';
import { YausOrientation } from '../shred/model/yaux-orientation';
import { YauxAbstractSelectComponent } from '../shred/yaux-abstract-form-input-select-element';
import { Item } from '../shred/model/yaux-tem';

@Component({
  selector: 'yaux-form-checkbox-group',
  templateUrl: './yaux-form-checkbox-group.component.html',
  styleUrls: ['./yaux-form-checkbox-group.component.sass']
})
export class YauxFormCheckboxGroupComponent extends YauxAbstractSelectComponent implements OnInit {

  @Input() orientation: string;

  orientationTypes = YausOrientation;

  selectedOption: Item;

  onCheckBoxClicked(): void {

  }
}
