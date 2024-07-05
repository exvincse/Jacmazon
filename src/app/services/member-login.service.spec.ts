import { TestBed } from '@angular/core/testing';

import { MemberLoginService } from './member-login.service';

describe('MemberLoginService', () => {
  let service: MemberLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
