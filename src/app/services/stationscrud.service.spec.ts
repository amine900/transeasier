import { TestBed } from '@angular/core/testing';

import { StationscrudService } from './stationscrud.service';

describe('StationscrudService', () => {
  let service: StationscrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationscrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
