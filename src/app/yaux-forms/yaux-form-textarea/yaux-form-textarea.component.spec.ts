import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxFormTextareaComponent } from './yaux-form-textarea.component';

describe('YauxFormTextareaComponent', () => {
  let component: YauxFormTextareaComponent;
  let fixture: ComponentFixture<YauxFormTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxFormTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
