import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'yaux-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formGroup = new FormGroup({
    input: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    input2: new FormControl('', [])
  });

  model = {
    myInput: 'Some value',
    myInput2: 'Input 2'
  };

  ngOnInit(): void {

  }
}
