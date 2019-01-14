import { TestBed } from '@angular/core/testing';

import { WsTestService } from './ws-test.service';

describe('WsTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsTestService = TestBed.get(WsTestService);
    expect(service).toBeTruthy();
  });
});
