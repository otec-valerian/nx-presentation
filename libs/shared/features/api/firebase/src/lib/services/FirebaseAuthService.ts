import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {IFbAuthRequest} from "../DTO/IFbAuthRequest";
import {from, Observable} from "rxjs";

@Injectable()
export class FirebaseAuthService{

  constructor(private afAuth: AngularFireAuth) {
  }

  login(req: IFbAuthRequest): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(req.email, req.password);
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  emailSignup(req: IFbAuthRequest): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(req.email, req.password);
  }

  fetchUserState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }


}
