import { NgModule } from '@angular/core';
// External modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Internal Modules
import { YauxTranslateModule } from '../yaux-translate/yaux-translate.module';
// Module Components
import { YauxFormErrorContainerComponent } from './yaux-form-error-container/yaux-form-error-container.component';
import { YauxFormInputComponent } from './yaux-form-input/yaux-form-input.component';
import { YauxFormLabelComponent } from './yaux-form-label/yaux-form-label.component';
import { YauxFormRowComponent } from './yaux-form-row/yaux-form-row.component';
import { YauxFormTextareaComponent } from './yaux-form-textarea/yaux-form-textarea.component';
import { YauxFormRadioComponent } from './yaux-form-radio/yaux-form-radio.component';
import { YauxFormRadioGroupComponent } from './yaux-form-radio-group/yaux-form-radio-group.component';
import { YauxFormSelectComponent } from './yaux-form-select/yaux-form-select.component';
import { YauxFormElementWrapperComponent } from './yaux-form-element-wrapper/yaux-form-element-wrapper.component';
import { YauxFormCheckboxComponent } from './yaux-form-checkbox/yaux-form-checkbox.component';
import { YauxFormCheckboxGroupComponent } from './yaux-form-checkbox-group/yaux-form-checkbox-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    YauxTranslateModule
  ],
  declarations: [
    YauxFormRowComponent,
    YauxFormErrorContainerComponent,
    YauxFormInputComponent,
    YauxFormTextareaComponent,
    YauxFormRadioGroupComponent,
    YauxFormRadioComponent,
    YauxFormSelectComponent,
    YauxFormLabelComponent,
    YauxFormElementWrapperComponent,
    YauxFormCheckboxComponent,
    YauxFormCheckboxGroupComponent
  ],
  exports: [
    YauxFormRowComponent,
    YauxFormErrorContainerComponent,
    YauxFormInputComponent,
    YauxFormTextareaComponent,
    YauxFormRadioGroupComponent,
    YauxFormRadioComponent,
    YauxFormSelectComponent,
    YauxFormLabelComponent,
    YauxFormElementWrapperComponent,
    YauxFormCheckboxComponent,
    YauxFormCheckboxGroupComponent
  ]
})
export class YauxFormsModule { }
