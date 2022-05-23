import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import {Store} from "@ngrx/store";
import {IFbAuthRequest} from "@nx-presentation/shared/features/api/firebase";
import * as AuthActions from "./auth.actions"
import * as AuthSelectors from './auth.selectors'
import {State} from "./auth.reducer";

@Injectable()
export class AuthFacade {

  state$: Observable<State> = this.store.select(AuthSelectors.getAuthState)
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
