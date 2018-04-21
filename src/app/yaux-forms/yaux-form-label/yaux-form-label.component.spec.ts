import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormLabelComponent } from './yaux-form-label.component';

describe('YauxFormLabelComponent', () => {
  let component: YauxFormLabelComponent;
  let fixture: ComponentFixture<YauxFormLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
