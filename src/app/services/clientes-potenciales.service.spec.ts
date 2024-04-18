import { TestBed } from '@angular/core/testing';

import { ClientesPotencialesService } from './clientes-potenciales.service';

describe('ClientesPotencialesService', () => {
  let service: ClientesPotencialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesPotencialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
