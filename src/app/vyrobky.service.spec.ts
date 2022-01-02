import { TestBed } from '@angular/core/testing';

import { VyrobkyService } from './vyrobky.service';

describe('VyrobkyService', () => {
  let service: VyrobkyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VyrobkyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
