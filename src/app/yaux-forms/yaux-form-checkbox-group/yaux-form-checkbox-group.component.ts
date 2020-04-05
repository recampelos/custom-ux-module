import { Component, OnInit, Input } from '@angular/core';

import {YauxAbstractMultipleInputOrientedComponent} from '../shred/yaux-abstract-multiple-input-oriented-component';

@Component({
  selector: 'yaux-form-checkbox-group',
  templateUrl: './yaux-form-checkbox-group.component.html',
  styleUrls: ['./yaux-form-checkbox-group.component.sass']
})
export class YauxFormCheckboxGroupComponent extends YauxAbstractMultipleInputOrientedComponent implements OnInit {

}
