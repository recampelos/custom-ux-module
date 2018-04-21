import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormElementWrapperComponent } from './yaux-form-element-wrapper.component';

describe('YauxFormElementWrapperComponent', () => {
  let component: YauxFormElementWrapperComponent;
  let fixture: ComponentFixture<YauxFormElementWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormElementWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormElementWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
