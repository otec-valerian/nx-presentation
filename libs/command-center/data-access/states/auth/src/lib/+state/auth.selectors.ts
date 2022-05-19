import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMAND_CENTER_AUTH_FEATURE_KEY, State } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<State>(COMMAND_CENTER_AUTH_FEATURE_KEY);

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: State) => state.loaded
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);

export const getSelected = createSelector(
  getAuthState,
  (state: State) => (state.authorizedUser)
);
