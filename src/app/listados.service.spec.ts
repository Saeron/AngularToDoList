import { TestBed } from '@angular/core/testing';

import { ListadosService } from './listados.service';

describe('ListadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadosService = TestBed.get(ListadosService);
    expect(service).toBeTruthy();
  });
});
