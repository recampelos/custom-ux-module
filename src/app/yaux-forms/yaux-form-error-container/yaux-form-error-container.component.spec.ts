import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormErrorContainerComponent } from './yaux-form-error-container.component';

describe('YauxFormErrorContainerComponent', () => {
  let component: YauxFormErrorContainerComponent;
  let fixture: ComponentFixture<YauxFormErrorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormErrorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormErrorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
