import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {AuthActions} from "@nx-presentation/neptun-simulator/data-access/states/auth"

@Injectable()
export class RouterEffects {

  constructor(private readonly actions$: Actions,
              private router: Router) {
  }

  logoutSuccess$ = createEffect(() => {
      console.log('in logout success!!!!')
      return this.actions$.pipe(
        ofType(AuthActions.logoutSuccess),
        tap(() => this.router.navigate(['login']))
      )
    }
    ,
    {dispatch: false}
  )

  authSuccess$ = createEffect(() => {
      console.log('IN AUTH SUCCESS EFFECT')
      return this.actions$.pipe(
        ofType(AuthActions.authUserSuccess),
        tap(() => this.router.navigate(['main-page']))
      )
    },
    {dispatch: false}
  )

}
