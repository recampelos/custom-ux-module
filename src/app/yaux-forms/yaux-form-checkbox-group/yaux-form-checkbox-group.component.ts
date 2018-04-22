import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YauxAbstractInputOrientedComponent } from '../shred/yaux-abstract-form-input-oriented-element'
import { MultipleInputItem } from '../shred/model/yaux-tem';
import { FormControl, FormGroup } from '@angular/forms';
import {YauxAbstractMultipleInputOrientedComponent} from '../shred/yaux-abstract-multiple-input-oriented-component';

@Component({
  selector: 'yaux-form-checkbox-group',
  templateUrl: './yaux-form-checkbox-group.component.html',
  styleUrls: ['./yaux-form-checkbox-group.component.sass']
})
export class YauxFormCheckboxGroupComponent extends YauxAbstractMultipleInputOrientedComponent implements OnInit {

}
