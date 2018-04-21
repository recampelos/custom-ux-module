// External modules
import { Component, OnInit, Input } from '@angular/core';
// Internal components
import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-input-element';



@Component({
  selector: 'yaux-form-input',
  templateUrl: './yaux-form-input.component.html',
  styleUrls: ['./yaux-form-input.component.sass']
})
export class YauxFormInputComponent extends YauxAbstractInputFormComponent {

  @Input() placeholder = '';

  @Input() type = 'text';
}
