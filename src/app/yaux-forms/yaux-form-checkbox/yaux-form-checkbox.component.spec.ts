import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormCheckboxComponent } from './yaux-form-checkbox.component';

describe('YauxFormCheckboxComponent', () => {
  let component: YauxFormCheckboxComponent;
  let fixture: ComponentFixture<YauxFormCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
