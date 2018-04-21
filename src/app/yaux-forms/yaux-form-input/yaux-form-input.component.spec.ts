import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormInputComponent } from './yaux-form-input.component';

describe('YauxFormInputComponent', () => {
  let component: YauxFormInputComponent;
  let fixture: ComponentFixture<YauxFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
