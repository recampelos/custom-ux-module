import { Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


export class YauxAbstractInputFormComponent implements OnInit {

  @Input() id: string;

  @Input() name: string;

  @Input() value: any;

  @Input() translationKey: string;

  @Input() colSize = 12;

  @Input() formGroup: FormGroup;

  @Input() formControlName: string;

  @Output() valueChange = new EventEmitter<any>();

  formControl: FormControl = null;

  hasValidation: boolean;

  isRequired = false;

  ngOnInit(): void {
    this.hasValidation = (this.formGroup !== null);
    this.name = (this.name || this.id);
    this.formControlName = (this.formControlName || this.id);
    this.translationKey = (this.translationKey || 'form.element.label.' + this.id);

    if (this.hasValidation) {
      this.formControl = this.formGroup.get(this.formControlName) as FormControl;

      if (this.formControl && this.formControl.validator) {
        Object.keys(this.formControl.validator(this.formControl)).forEach((key) => {
          console.log(key);

          if ('required' === key) {
            this.isRequired = true;
          }
        });
      }
    }
  }

  onValueChange(event): void {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
