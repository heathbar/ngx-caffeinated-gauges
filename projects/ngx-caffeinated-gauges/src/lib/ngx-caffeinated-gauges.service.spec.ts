import { TestBed } from '@angular/core/testing';

import { NgxCaffeinatedGaugesService } from './ngx-caffeinated-gauges.service';

describe('NgxCaffeinatedGaugesService', () => {
  let service: NgxCaffeinatedGaugesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCaffeinatedGaugesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
