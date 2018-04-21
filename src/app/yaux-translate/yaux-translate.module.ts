// External Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module Components
import { YauxTranslateTextComponent } from './yaux-translate-text/yaux-translate-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    YauxTranslateTextComponent
  ],
  exports: [
    YauxTranslateTextComponent
  ]
})
export class YauxTranslateModule { }
