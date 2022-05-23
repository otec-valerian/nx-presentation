import {Action, createReducer, on} from "@ngrx/store";
import * as InitActions from './init.actions'
import {IError} from "@nx-presentation/shared/features/api/domain-types";

export const INIT_FEATURE_KEY = 'init-feature-key';

export interface State {
  loaded: boolean | null;
  error: IError | null;
}

export const initialState: State = {
  loaded: null,
  error: null
}

const initReducer = createReducer(
  initialState,
  on(InitActions.init, (state) => ({
    ...state,
    loaded: null,
    error: null
  })),
  on(InitActions.initSuccess, (state) => ({
    ...state,
    loaded: true,
    error: null
  })),
  on(InitActions.initFailed, (state, {error}) => ({
    ...state,
    loaded: true,
    error: error
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return initReducer(state, action);
}
