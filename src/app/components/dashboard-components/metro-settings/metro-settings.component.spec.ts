import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroSettingsComponent } from './metro-settings.component';

describe('MetroSettingsComponent', () => {
  let component: MetroSettingsComponent;
  let fixture: ComponentFixture<MetroSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetroSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
