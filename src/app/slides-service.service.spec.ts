/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlidesServiceService } from './slides-service.service';

describe('Service: SlidesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidesServiceService]
    });
  });

  it('should ...', inject([SlidesServiceService], (service: SlidesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
