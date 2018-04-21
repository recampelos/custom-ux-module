import { Component, OnInit, Input } from '@angular/core';

import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-element';

@Component({
  selector: 'yaux-yaux-form-input',
  templateUrl: './yaux-form-input.component.html',
  styleUrls: ['./yaux-form-input.component.sass']
})
export class YauxFormInputComponent extends YauxAbstractInputFormComponent implements OnInit {

  @Input() placeholder = '';

  @Input() type = 'text';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}