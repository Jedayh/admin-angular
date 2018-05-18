import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocieterComponent } from './add-societer.component';

describe('AddSocieterComponent', () => {
  let component: AddSocieterComponent;
  let fixture: ComponentFixture<AddSocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
