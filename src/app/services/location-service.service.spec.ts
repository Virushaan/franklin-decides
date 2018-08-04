import { TestBed, inject } from '@angular/core/testing';

import { LocationServiceService } from './location-service.service';

describe('LocationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationServiceService]
    });
  });

  it('should be created', inject([LocationServiceService], (service: LocationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
