import { Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { YauxTranslateKeyCreator } from '../../yaux-translate/shared/yaux-translate-key-creator';


export class YauxAbstractFormComponent implements OnInit {

  @Input() id: string;

  @Input() translationKey: string;

  @Input() colSize = 12;

  @Input() formGroup: FormGroup;

  @Input() formControlName: string;

  @Input() isRequired: boolean;

  @Output() valueChange = new EventEmitter<any>();

  formControl: FormControl = null;

  hasValidation: boolean;

  ngOnInit(): void {
    this.hasValidation = (this.formGroup !== null);
    this.formControlName = (this.formControlName || this.id);
    this.translationKey = (this.translationKey || YauxTranslateKeyCreator.createFormLabelKey(this.id));

    if (this.hasValidation) {
      this.formControl = this.formGroup.get(this.formControlName) as FormControl;

      if ((this.isRequired === undefined) && this.formControl && this.formControl.validator) {
        Object.keys(this.formControl.validator(this.formControl)).forEach((key) => {
          if ('required' === key) {
            this.isRequired = true;
          }
        });
      }
    }

    this.isRequired = (this.isRequired || false);
  }
}
