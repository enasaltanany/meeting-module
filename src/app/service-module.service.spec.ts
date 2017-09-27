import { TestBed, inject } from '@angular/core/testing';

import { ServiceModuleService } from './service-module.service';

describe('ServiceModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceModuleService]
    });
  });

  it('should be created', inject([ServiceModuleService], (service: ServiceModuleService) => {
    expect(service).toBeTruthy();
  }));
});
