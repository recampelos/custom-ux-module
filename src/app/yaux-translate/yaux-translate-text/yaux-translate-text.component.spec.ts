import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YauxTranslateLabelComponent } from './yaux-translate-label.component';

describe('YauxTranslateLabelComponent', () => {
  let component: YauxTranslateLabelComponent;
  let fixture: ComponentFixture<YauxTranslateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YauxTranslateLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YauxTranslateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
