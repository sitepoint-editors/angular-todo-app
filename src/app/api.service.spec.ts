import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SessionService } from 'app/session.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, SessionService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
