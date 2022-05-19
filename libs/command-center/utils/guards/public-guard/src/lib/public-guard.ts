import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthFacade} from "@nx-presentation/command-center/data-access/auth-state";

@Injectable()
export class PublicGuard implements CanActivate {

  constructor(private authFacade: AuthFacade,
              private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('in public guard')
    return this.authFacade.selectedAuth$.pipe(
      map(currentAuthUser => {
        // can enter login page only when user is unauthorized
        if (currentAuthUser) {
          this.router.navigate(['main-page'])
          return false
        }
        return true
      })
    )
  }

}
