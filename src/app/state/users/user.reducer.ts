import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/user/user';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  validateUser,
  validateUserFailure,
  validateUserSuccess,
} from './user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
  checkUser: {},
  currUser: {},
  users: [],
  error: '',
  isAuthenticated: false,
  status: 'pending',
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    error: '',
    status: 'success',
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  on(validateUser, (state, { name, password }) => ({
    ...state,
    checkUser: { name, password },
    status: 'pending',
  })),
  on(validateUserSuccess, (state, { isAuthenticated, currUser }) => ({
    ...state,
    currUser,
    isAuthenticated,
    error: '',
    status: 'success',
  })),
  on(validateUserFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
