import { TestBed } from '@angular/core/testing';

import { ChangelniService } from './changelni.service';

describe('ChangelniService', () => {
  let service: ChangelniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangelniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
