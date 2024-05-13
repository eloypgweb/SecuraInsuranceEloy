import { TestBed } from '@angular/core/testing';

import { Detalle2Service } from './detalle2.service';

describe('Detalle2Service', () => {
  let service: Detalle2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Detalle2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
