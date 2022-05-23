import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import {map, Observable} from "rxjs";
import firebase from "firebase/compat";
import {IFbAuthRequest} from "@nx-presentation/shared/features/api/firebase";

@Injectable()
export class AuthFacade {

  loaded$: Observable<boolean> = this.store.select(AuthSelectors.getAuthLoaded);
  selectedAuth$: Observable<firebase.User | null> = this.store.select(AuthSelectors.getSelected);

  constructor(private readonly store: Store) {
  }

  init() {
    this.store.dispatch(AuthActions.init());
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
