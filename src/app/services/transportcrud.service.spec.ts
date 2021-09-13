import { TestBed } from '@angular/core/testing';

import { TransportcrudService } from './transportcrud.service';

describe('TransportcrudService', () => {
  let service: TransportcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
