import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { SessionService } from './session.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        SessionService
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
