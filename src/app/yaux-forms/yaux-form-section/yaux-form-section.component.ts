import {Component, Input, OnInit} from '@angular/core';
import {YauxTranslateKeyCreator} from '../../yaux-translate/shared/yaux-translate-key-creator';

@Component({
  selector: 'yaux-form-section',
  templateUrl: './yaux-form-section.component.html',
  styleUrls: ['./yaux-form-section.component.sass']
})
export class YauxFormSectionComponent implements OnInit {

  @Input() id: string;

  @Input() titleTranslationKey: string;

  isOpen = true;

  constructor() { }

  ngOnInit() {
    this.titleTranslationKey = (this.titleTranslationKey || YauxTranslateKeyCreator.createFormLabelKey(this.id));
  }
}
