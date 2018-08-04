import { TestBed, inject } from '@angular/core/testing';

import { ApiTestService } from './api-test.service';

describe('ApiTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTestService]
    });
  });

  it('should be created', inject([ApiTestService], (service: ApiTestService) => {
    expect(service).toBeTruthy();
  }));
});
