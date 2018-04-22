import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YauxTranslateKeyCreator } from '../../yaux-translate/shared/yaux-translate-key-creator';

@Component({
  selector: 'yaux-form-error-container',
  templateUrl: './yaux-form-error-container.component.html',
  styleUrls: ['./yaux-form-error-container.component.sass']
})
export class YauxFormErrorContainerComponent implements OnInit {

  @Input() formElementControl: FormControl;

  @Input() formElementTranslationKey: string;

  validators: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.formElementControl && this.formElementControl.validator && this.formElementControl.validator(this.formElementControl)) {
      Object.keys(this.formElementControl.validator(this.formElementControl)).forEach((key) => {
        this.validators.push(key);
      });
    }
  }

  createValidationErrorMessageKey(validatior: string): string {
    return YauxTranslateKeyCreator.createValidationLabelKey(validatior);
  }
}
