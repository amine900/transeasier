import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgmComponent } from './tgm.component';

describe('TgmComponent', () => {
  let component: TgmComponent;
  let fixture: ComponentFixture<TgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
