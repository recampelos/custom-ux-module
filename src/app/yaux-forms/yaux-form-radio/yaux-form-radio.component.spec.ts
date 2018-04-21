import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormRadioComponent } from './yaux-form-radio.component';

describe('YauxFormRadioComponent', () => {
  let component: YauxFormRadioComponent;
  let fixture: ComponentFixture<YauxFormRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
