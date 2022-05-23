import {Injectable} from "@angular/core";
import { CanActivate, UrlTree} from "@angular/router";
import {filter, mergeMap, Observable, of, switchMap} from "rxjs";
import firebase from "firebase/compat";
import {AuthFacade} from "@nx-presentation/command-center/data-access/auth-state";

@Injectable()
export class InitGuard implements CanActivate {

  constructor(private authFacade: AuthFacade) {
  }

  private waitForDataToLoad(): Observable<firebase.User | null> {
    return this.authFacade.selectedAuth$.pipe(
      filter(currentAuthUser => {
        console.log('user loaded', currentAuthUser)
        return !!currentAuthUser
      })
    )
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authFacade.loaded$.pipe(
      mergeMap(isDataLoaded => {
        console.log('in loaded init pipe')
        if (isDataLoaded) {
          console.log('success data loaded')
          return of(true)
        }
        this.authFacade.init();
        return this.waitForDataToLoad().pipe(
          switchMap(() => of(true))
        )
      })
    )
  }

}
