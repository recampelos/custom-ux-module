import { Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { YauxAbstractFormComponent } from './yaux-abstract-form-element';


export class YauxAbstractInputFormComponent extends YauxAbstractFormComponent implements OnInit {

  @Input() name: string;

  @Input() value: any;

  @Output() valueChange = new EventEmitter<any>();

  formControl: FormControl = null;

  hasValidation: boolean;

  isRequired = false;

  onValueChange(event): void {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
