import { Component, OnInit, Input } from '@angular/core';

import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-input-element';


@Component({
  selector: 'yaux-form-textarea',
  templateUrl: './yaux-form-textarea.component.html',
  styleUrls: ['./yaux-form-textarea.component.sass']
})
export class YauxFormTextareaComponent extends YauxAbstractInputFormComponent {

  @Input() rows: number;

}
