import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, mergeMap, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthFacade} from "@nx-presentation/command-center/data-access/auth-state";

@Injectable()
export class AuthGuard implements CanActivate {

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
