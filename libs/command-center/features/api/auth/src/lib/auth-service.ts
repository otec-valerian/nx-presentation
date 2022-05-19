import {Injectable} from "@angular/core";
import {FirebaseAuthService} from "@nx-presentation/shared/features/api/firebase";
import firebase from "firebase/compat";
import {IFbAuthRequest} from "../../../../../../shared/features/api/firebase/src/lib/DTO/IFbAuthRequest";
import {from, map, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

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
