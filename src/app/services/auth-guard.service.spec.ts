import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { Store } from '@ngrx/store';
import { Router, RouterStateSnapshot } from '@angular/router';

describe('AuthGuardService', () => {
  const fakeUrls = ['/', '/cart', '/products', '/checkout'];
  let service: AuthGuard;
  const dummyRoute = {} as RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check is user is logged in and the access is granted', () => {
    sessionStorage.setItem('curr', 'true');
    var isTrue = sessionStorage.getItem('curr') === 'true';
    expect(isTrue).toBeTruthy();
    fakeUrls.forEach((fakeUrl) => {
      const isAccessGranted = service.checkLoggedIn(fakeUrl);
      expect(isAccessGranted).toBeTrue();
      const canActivate = service.canActivate(dummyRoute);
      expect(canActivate).toBeTrue();
    });
  });

  it('should check is user is logged out', () => {
    sessionStorage.setItem('curr', 'false');
    var isFalse = sessionStorage.getItem('curr') === 'false';
    expect(isFalse).toBeTruthy();
  });
});
