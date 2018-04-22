import { Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { YauxAbstractFormComponent } from './yaux-abstract-form-element';


export class YauxAbstractInputFormComponent extends YauxAbstractFormComponent implements OnInit {

  @Input() name: string;

  @Input() value: any;

  onValueChange(event): void {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
