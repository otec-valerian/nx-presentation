import firebase from "firebase/compat";
import {IError} from "@nx-presentation/shared/features/api/domain-types";
import {Action, createReducer, on} from "@ngrx/store";
import * as AuthActions from "./auth.actions";

export const NEPTUN_SIMULATOR_AUTH_FEATURE_KEY = 'neptun-simulator-auth';

export interface State {
  loaded: boolean;
  authorizedUser: firebase.User | null;
  error: IError | null;
}

export const initialState: State = {
  loaded: false,
  authorizedUser: null,
  error: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.init, (state) => ({...state, loaded: false, error: null})),
  on(AuthActions.initAuthSuccess, (state, {authUser}) => ({
    ...state,
    loaded: true,
    authorizedUser: authUser,
    error: null
  })),
  on(AuthActions.initAuthFailure, (state, {error}) => ({
    ...state,
    loaded: true,
    authorizedUser: null,
    error: error,
  })),
  on(AuthActions.authUserSuccess, (state, {authUser}) => ({
    ...state,
    loaded: true,
    authorizedUser: authUser,
    error: null,
  })),
  on(AuthActions.authUserFailed, (state, {error}) => ({
    ...state,
    loaded: true,
    authorizedUser: null,
    error: error,
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    loaded: false,
    authorizedUser: null,
    error: null
  })),
  on(AuthActions.logoutFailed, (state, {error}) => ({
    ...state,
    loaded: true,
    authorizedUser: null,
    error: error
  })),
  on(AuthActions.fetchUserSuccess, (state, {authUser}) => ({
    ...state,
    loaded: true,
    authorizedUser: authUser,
    error: null
  })),
  on(AuthActions.fetchUserFailed, (state, {error}) => ({
    ...state,
    loaded: true,
    authorizedUser: null,
    error: error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
