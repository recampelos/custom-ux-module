import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'yaux-yaux-form-error-container',
  templateUrl: './yaux-form-error-container.component.html',
  styleUrls: ['./yaux-form-error-container.component.sass']
})
export class YauxFormErrorContainerComponent implements OnInit {

  @Input() formElementControl: FormControl;

  @Input() formElementTranslatioKey: string;

  validators: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.formElementControl) {
      Object.keys(this.formElementControl.validator(this.formElementControl)).forEach((key) => {
        this.validators.push(key);
      });
    }
  }
}
