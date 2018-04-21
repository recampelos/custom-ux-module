import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yaux-yaux-translate-text',
  templateUrl: './yaux-translate-text.component.html',
  styleUrls: ['./yaux-translate-text.component.sass']
})
export class YauxTranslateTextComponent implements OnInit {

  @Input() key: string;

  constructor() { }

  ngOnInit() {
  }

}
