import { Component, OnInit, Input } from '@angular/core';
import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-element';

@Component({
  selector: 'yaux-form-radio',
  templateUrl: './yaux-form-radio.component.html',
  styleUrls: ['./yaux-form-radio.component.sass']
})
export class YauxFormRadioComponent extends YauxAbstractInputFormComponent implements OnInit {

  @Input() inline = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
