import { TestBed } from '@angular/core/testing';

import { ListRenovationsService } from './list-renovations.service';

describe('ListRenovationsService', () => {
  let service: ListRenovationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRenovationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
