import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieterComponent } from './societer.component';

describe('SocieterComponent', () => {
  let component: SocieterComponent;
  let fixture: ComponentFixture<SocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
