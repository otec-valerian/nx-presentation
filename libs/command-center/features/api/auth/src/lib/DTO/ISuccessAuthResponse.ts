import {IUser} from "./IUser";
import firebase from "firebase/compat";

export interface ISuccessAuthResponse {
  authorizedUser: firebase.User | null;
}
