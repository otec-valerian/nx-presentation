import {Injectable} from "@angular/core";
import {FirebaseAuthService, IFbAuthRequest} from "@nx-presentation/shared/features/api/firebase";
import firebase from "firebase/compat";
import {from, map, Observable, Subscription} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private fbAuthService: FirebaseAuthService) {
  }

  login(req: IFbAuthRequest): Observable<firebase.auth.UserCredential> {
    return from(this.fbAuthService.login(req));
  }

  emailSignUp(req: IFbAuthRequest): Observable<firebase.auth.UserCredential> {
    return from(this.fbAuthService.emailSignup(req));
  }

  logout(): Observable<void> {
    return this.fbAuthService.logout();
  }

  getUser(): Observable<firebase.User | null> {
    return this.fbAuthService.fetchUserState();
  }

}
