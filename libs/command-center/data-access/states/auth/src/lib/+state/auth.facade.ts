import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';
import * as AuthSelectors from './auth.selectors';
import {map, Observable} from "rxjs";
import {IUser} from "../../../../../../features/api/auth/src/lib/DTO/IUser";
import firebase from "firebase/compat";
import {State} from "./auth.reducer";
import {IFbAuthRequest} from "../../../../../../../shared/features/api/firebase/src/lib/DTO/IFbAuthRequest";

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$: Observable<boolean> = this.store.select(AuthSelectors.getAuthLoaded);
  selectedAuth$: Observable<firebase.User | null> = this.store.select(AuthSelectors.getSelected);

  constructor(private readonly store: Store) {
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.init());
    console.log('init started')
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
  }

  signIn(req: IFbAuthRequest) {
    this.store.dispatch(AuthActions.authUser({req: req}))
  }

  fetchUser() {
    this.store.dispatch(AuthActions.fetchUser())
  }
}
