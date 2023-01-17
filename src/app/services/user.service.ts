import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from 'src/app/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isAuthenticated: boolean = false;
  redirectUrl: string = '';
  private url = 'api/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  logout() {
    this.isAuthenticated = false;
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<User>(this.url, user, { headers }).pipe(
      tap((data) => console.log(data)),
      catchError(this.errorHandler)
    );
  }

  validateUser(
    name: string,
    password: string,
    uList: User[]
  ): Observable<User> {
    // console.log('Hello');

    let userL = uList.filter((ele) => {
      // console.log(ele.userName + ' ' + name);

      return ele.userName === name;
    });

    let userObj = userL[0];

    // console.log(userL);

    if (userObj && password === userObj['password']) {
      console.log('User Logged in');

      return new Observable((obj) => {
        obj.next(userObj);
        obj.complete();
      });
    } else {
      console.log('Invalid User');

      return new Observable((obj) => {
        obj.error('User Not Validated');
      });
    }
  }

  private errorHandler(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status} ${err.body.error}`;
    }
    console.log(err);
    return throwError(errorMessage);
  }
}
