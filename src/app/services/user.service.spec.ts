import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { User } from '../user/user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Validate User', () => {
    let userList = [
      { id: 1, userName: 'Vatsal', isAdmin: true, password: 'vatsal' },
      { id: 2, userName: 'Anish', isAdmin: false, password: 'vatsal' },
      { id: 3, userName: 'Ayush', isAdmin: false, password: 'vatsal' },
      { id: 4, userName: 'Manpreet', isAdmin: false, password: 'vatsal' },
    ];
    let userObj = userList[3];
    let name = 'Manpreet';
    let password = 'vatsal';

    service.validateUser(name, password, userList).subscribe((val) => {
      expect(val).toEqual(userObj);
    });
    // let user = component.users.filter(
    //   (user) =>
    //     user.email === component.loginForm.get('email')?.value &&
    //     user.password === component.loginForm.get('password')?.value
    // )[0];
    // expect(user).toBeTruthy();
  });
});
