import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WassalniComponent } from './wassalni.component';

describe('WassalniComponent', () => {
  let component: WassalniComponent;
  let fixture: ComponentFixture<WassalniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WassalniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WassalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
