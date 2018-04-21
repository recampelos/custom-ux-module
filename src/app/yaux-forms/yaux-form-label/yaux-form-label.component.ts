import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yaux-form-label',
  templateUrl: './yaux-form-label.component.html',
  styleUrls: ['./yaux-form-label.component.sass']
})
export class YauxFormLabelComponent implements OnInit {

  @Input() translatioKey: string;

  @Input() for: string;

  @Input() isRequired: boolean;

  constructor() { }

  ngOnInit() {
  }

}
