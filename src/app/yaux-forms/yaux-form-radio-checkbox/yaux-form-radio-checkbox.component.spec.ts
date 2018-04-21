import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormRadioCheckboxComponent } from './yaux-form-radio-checkbox.component';

describe('YauxFormRadioCheckboxComponent', () => {
  let component: YauxFormRadioCheckboxComponent;
  let fixture: ComponentFixture<YauxFormRadioCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormRadioCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormRadioCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
