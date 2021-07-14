import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransitComponent } from './public-transit.component';

describe('PublicTransitComponent', () => {
  let component: PublicTransitComponent;
  let fixture: ComponentFixture<PublicTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTransitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
