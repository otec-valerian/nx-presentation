import { createAction, props } from '@ngrx/store';
import {ISuccessAuthResponse} from "../../../../../../features/api/auth/src/lib/DTO/ISuccessAuthResponse";
import {IError} from "@nx-presentation/shared/features/api/domain-types";
import firebase from "firebase/compat";
import {IFbAuthRequest} from "../../../../../../../shared/features/api/firebase/src/lib/DTO/IFbAuthRequest";

export const init = createAction('[Auth] Init');

export const initAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{authUser: firebase.User | null}>()
);

export const initAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: IError }>()
);

export const logout = createAction(
  '[Auth/API] User logs out'
)

export const logoutSuccess = createAction(
  '[Auth/API] User successfully logged out'
)

export const logoutFailed = createAction(
  '[Auth/API] Error on logging out the user',
  props<{error: IError}>()
)

export const authUser = createAction(
  '[Auth/API] User started auth',
  props<{req: IFbAuthRequest}>()
)

export const authUserSuccess = createAction(
  '[Auth/API] User successfully authenticated',
  props<{authUser: firebase.User | null}>()
)

export const authUserFailed = createAction(
  '[Auth/API] User failed auth',
  props<{error: IError}>()
)

export const fetchUser = createAction(
  '[Auth/API] Fetch user state'
)

export const fetchUserSuccess = createAction(
  '[Auth/API] Success user fetch',
  props<{authUser: firebase.User | null}>()
)

export const fetchUserFailed = createAction(
  '[Auth/API] Failed to fetch user',
  props<{error: IError}>()
)
