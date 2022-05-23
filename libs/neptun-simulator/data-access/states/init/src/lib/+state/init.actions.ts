import {createAction, props} from "@ngrx/store";
import {IError} from "@nx-presentation/shared/features/api/domain-types";

export const init = createAction(
  '[Init Facade] Start app initialization',
);

export const initSuccess = createAction(
  '[Init Effect] Successfully loaded init data'
)

export const initFailed = createAction(
  '[Init Effect] Failed to load init data',
  props<{error: IError | null}>()
)
