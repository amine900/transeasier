import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSettingsComponent } from './station-settings.component';

describe('StationSettingsComponent', () => {
  let component: StationSettingsComponent;
  let fixture: ComponentFixture<StationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
