import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideOfferComponent } from './ride-offer.component';

describe('RideOfferComponent', () => {
  let component: RideOfferComponent;
  let fixture: ComponentFixture<RideOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
