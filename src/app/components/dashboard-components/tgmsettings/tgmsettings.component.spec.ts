import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TGMSettingsComponent } from './tgmsettings.component';

describe('TGMSettingsComponent', () => {
  let component: TGMSettingsComponent;
  let fixture: ComponentFixture<TGMSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TGMSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TGMSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
