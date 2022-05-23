import {createFeatureSelector, createSelector} from "@ngrx/store";
import {INIT_FEATURE_KEY, State} from "./init.reducer";

export const getInitState = createFeatureSelector<State>(INIT_FEATURE_KEY);

export const getInitLoaded = createSelector(
  getInitState,
  (state: State) => state.loaded
)

export const getInitError = createSelector(
  getInitState,
  (state: State) => state.error
)
