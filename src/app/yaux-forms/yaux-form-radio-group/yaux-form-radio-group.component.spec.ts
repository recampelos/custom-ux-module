import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormRadioGroupComponent } from './yaux-form-radio-group.component';

describe('YauxFormRadioGroupComponent', () => {
  let component: YauxFormRadioGroupComponent;
  let fixture: ComponentFixture<YauxFormRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
