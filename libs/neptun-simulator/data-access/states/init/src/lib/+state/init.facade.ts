import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as InitSelectors from './init.selectors';
import * as InitActions from './init.actions'
import {IError} from "@nx-presentation/shared/features/api/domain-types";
import {State} from "./init.reducer";

@Injectable()
export class InitFacade {

  constructor(private readonly store: Store) {
  }
  state$: Observable<State> = this.store.select(InitSelectors.getInitState);
  loaded$: Observable<boolean | null> = this.store.select(InitSelectors.getInitLoaded);
  error$: Observable<IError | null> = this.store.select(InitSelectors.getInitError);

  init(): void {
    this.store.dispatch(InitActions.init());
  }
}
