import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormSectionComponent } from './yaux-form-section.component';

describe('YauxFormSectionComponent', () => {
  let component: YauxFormSectionComponent;
  let fixture: ComponentFixture<YauxFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
