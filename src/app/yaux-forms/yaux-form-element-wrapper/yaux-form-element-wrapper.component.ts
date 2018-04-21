import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { YauxAbstractFormComponent } from '../shred/yaux-abstract-form-element';

@Component({
  selector: 'yaux-form-element-wrapper',
  templateUrl: './yaux-form-element-wrapper.component.html',
  styleUrls: ['./yaux-form-element-wrapper.component.sass']
})
export class YauxFormElementWrapperComponent extends YauxAbstractFormComponent {
}
