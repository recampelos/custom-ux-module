import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {CheckBoxItem, Item} from './yaux-forms/shred/model/yaux-tem';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'yaux-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formGroup = new FormGroup({
    input: new FormControl('', [
      Validators.required
    ]),
    input2: new FormControl('', []),
    input3: new FormControl('', [
      Validators.required
    ])
  });

  model = {
    myInput: [],
    myInput2: 'Input 2',
    myInput3: null
  };

  subject: Subject<Item[]> = new Subject<Item[]>();

  items: CheckBoxItem[] = [
    {key: 'op1', value: 'op1'},
    {key: 'op2', value: 'op2'}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('send item');
      this.subject.next([
        {key: 'op1', value: 'op1'},
        {label: 'op2', value: 'op2'}
      ]);
    }, 2000);
  }

  getItemsObservable(): Observable<Item[]> {
    return this.subject.asObservable();
  }
}
