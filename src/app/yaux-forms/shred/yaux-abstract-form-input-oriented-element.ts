import { Input } from '@angular/core';

import { YauxAbstractInputFormComponent } from './yaux-abstract-form-input-element';
import { YausOrientation } from './model/yaux-orientation';

export class YauxAbstractInputOrientedComponent extends YauxAbstractInputFormComponent {

  @Input() orientation = YausOrientation.VERTICAL;

  orientationTypes = YausOrientation;

}
