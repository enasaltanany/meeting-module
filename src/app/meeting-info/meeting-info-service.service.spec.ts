import { TestBed, inject } from '@angular/core/testing';

import { MeetingInfoServiceService } from './meeting-info-service.service';

describe('MeetingInfoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingInfoServiceService]
    });
  });

  it('should be created', inject([MeetingInfoServiceService], (service: MeetingInfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
