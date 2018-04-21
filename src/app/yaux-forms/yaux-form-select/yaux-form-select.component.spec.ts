import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormSelectComponent } from './yaux-form-select.component';

describe('YauxFormSelectComponent', () => {
  let component: YauxFormSelectComponent;
  let fixture: ComponentFixture<YauxFormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
