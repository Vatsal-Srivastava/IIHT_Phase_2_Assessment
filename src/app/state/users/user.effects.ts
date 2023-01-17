import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { Store } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  validateUser,
  validateUserFailure,
  validateUserSuccess,
} from './user.actions';
import { UserState } from './user.state';
import { User } from 'src/app/user/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<UserState>
  ) {}

  users: User[] = [];

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => {
            this.users = users;
            return loadUsersSuccess({ users });
          }),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    );
  });

  validateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(validateUser),
      switchMap((action) => {
        // console.log(action.name + ' ' + action.password);
        return this.userService
          .validateUser(action.name, action.password, this.users)
          .pipe(
            map((user) => {
              // console.log(user);
              return validateUserSuccess({
                isAuthenticated: true,
                currUser: user,
              });
            }),
            catchError((error) => of(validateUserFailure({ error })))
          );
      })
    );
  });
}
