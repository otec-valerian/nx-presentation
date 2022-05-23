import {Injectable} from "@angular/core";
import { CanActivate, UrlTree} from "@angular/router";
import {filter, mergeMap, Observable, of, switchMap} from "rxjs";
import firebase from "firebase/compat";
import {InitFacade} from "@nx-presentation/neptun-simulator/data-access/states/init";

@Injectable()
export class InitGuard implements CanActivate {

  constructor(private initFacade: InitFacade) {
  }

  private waitForDataToLoad(): Observable<boolean | null> {
    return this.initFacade.loaded$.pipe(
      filter(isLoaded => {
        console.log('init data loaded', isLoaded)
        return !!isLoaded;
      })
    )
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.initFacade.loaded$.pipe(
      mergeMap(isDataLoaded => {
        console.log('in loaded init pipe')
        if (isDataLoaded) {
          console.log('success data loaded')
          return of(true)
        }
        this.initFacade.init();
        return this.waitForDataToLoad().pipe(
          switchMap(() => of(true))
        )
      })
    )
    // return this.authFacade.loaded$.pipe(
    //   mergeMap(isDataLoaded => {
    //     console.log('in loaded init pipe')
    //     if (isDataLoaded) {
    //       console.log('success data loaded')
    //       return of(true)
    //     }
    //     this.authFacade.init();
    //     return this.waitForDataToLoad().pipe(
    //       switchMap(() => of(true))
    //     )
    //   })
    // )
  }

}
