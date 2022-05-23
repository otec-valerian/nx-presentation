import {Injectable} from "@angular/core";
import {CanActivate, Router, UrlTree} from "@angular/router";
import {mergeMap, Observable, of} from "rxjs";
import {AuthFacade} from "@nx-presentation/neptun-simulator/data-access/states/auth";

@Injectable()
export class PrivateGuard implements CanActivate {

  constructor(private authStateFacade: AuthFacade,
              private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('in auth guard')
    return this.authStateFacade.selectedAuth$.pipe(
      mergeMap(currentAuth => {
        console.log('in auth guard', currentAuth)
        if (currentAuth) {
          return of(true)
        } else {
          return this.authStateFacade.loaded$.pipe(
            mergeMap(isInited => {
              if (!isInited) {
                this.authStateFacade.init()
              }
              this.router.navigate(['login'])
              return of(false)
            })
          )
        }
      })
    )
  }
}
