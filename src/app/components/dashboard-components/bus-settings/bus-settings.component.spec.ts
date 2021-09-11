import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSettingsComponent } from './bus-settings.component';

describe('BusSettingsComponent', () => {
  let component: BusSettingsComponent;
  let fixture: ComponentFixture<BusSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
