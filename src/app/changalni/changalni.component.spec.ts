import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangalniComponent } from './changalni.component';

describe('ChangalniComponent', () => {
  let component: ChangalniComponent;
  let fixture: ComponentFixture<ChangalniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangalniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
