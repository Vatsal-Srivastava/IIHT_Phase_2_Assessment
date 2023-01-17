import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const getUserFeature = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(getUserFeature, (state) => state.users);

export const getError = createSelector(getUserFeature, (state) => state.error);

export const getCurrUser = createSelector(
  getUserFeature,
  (state) => state.currUser
);

export const getAuth = createSelector(
  getUserFeature,
  (state) => state.isAuthenticated
);
