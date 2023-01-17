import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/user/user';

export const loadUsers = createAction('[User] Load All Users');

export const loadUsersSuccess = createAction(
  '[User] User Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

export const validateUser = createAction(
  '[User] Check Validity',
  props<{ name: string; password: string }>()
);

export const validateUserSuccess = createAction(
  '[User] Valid User',
  props<{ isAuthenticated: boolean; currUser: User }>()
);

export const validateUserFailure = createAction(
  '[User] Valid User',
  props<{ error: string }>()
);
