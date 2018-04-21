import { Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';


export class YauxAbstractInputFormComponent implements OnInit {

  @Input() id: string;

  @Input() name: string;

  @Input() value: any;

  @Input() translationKey: string;

  @Input() colSize = 12;

  @Input() formGroup: FormGroup;

  @Input() formControlName: string;

  @Output() valueChange = new EventEmitter();

  formControl: FormControl = null;

  hasValidation: boolean;

  ngOnInit(): void {
    this.hasValidation = (this.formControl !== null);
    this.name = (this.name || this.id);
    this.formControlName = (this.formControlName || this.id);
    this.translationKey = (this.translationKey || 'form.element.label.' + this.id);

    if (this.hasValidation) {
      this.formControl = this.formGroup.get(this.formControlName) as FormControl;
    }
  }

  onValueChange(): void {
    this.valueChange.emit(this.value);
  }
}
