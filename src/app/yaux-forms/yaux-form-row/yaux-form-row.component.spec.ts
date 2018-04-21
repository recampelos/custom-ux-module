import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormRowComponent } from './yaux-form-row.component';

describe('YauxFormRowComponent', () => {
  let component: YauxFormRowComponent;
  let fixture: ComponentFixture<YauxFormRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
