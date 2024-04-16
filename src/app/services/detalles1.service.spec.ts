import { TestBed } from '@angular/core/testing';

import { Detalles1Service } from './detalles1.service';

describe('Detalles1Service', () => {
  let service: Detalles1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Detalles1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
