import { Component, OnInit, Input } from '@angular/core';
import { YauxAbstractInputFormComponent } from '../shred/yaux-abstract-form-element';

@Component({
  selector: 'yaux-yaux-form-textarea',
  templateUrl: './yaux-form-textarea.component.html',
  styleUrls: ['./yaux-form-textarea.component.sass']
})
export class YauxFormTextareaComponent extends YauxAbstractInputFormComponent implements OnInit {

  @Input() rows: number;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
