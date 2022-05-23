import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {fetch} from "@nrwl/angular";
import {map} from "rxjs";
import {AuthService} from "@nx-presentation/neptun-simulator/features/api/auth";
import {AuthActions} from "@nx-presentation/neptun-simulator/data-access/states/auth"
import {CommonUtil} from "@nx-presentation/shared/utils/common-util";

@Injectable()
export class AuthEffects {

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      fetch({
        run: () => {
          console.log('start init')
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.authService.getUser().pipe(
            map(user => {
              console.log(user, 'success init')
              const userCopy = this.commonUtil.getDeepCopy(user);
              return AuthActions.initAuthSuccess({authUser: userCopy})
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.initAuthFailure({error: error});
        }
      })
    )
  );

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authUser),
      fetch({
        run: ({req}) => {
          console.log('in auth effect')
          return this.authService.emailSignUp(req).pipe(
            map(({user}) => {
              const userCopy = this.commonUtil.getDeepCopy(user);
              return AuthActions.authUserSuccess({authUser: userCopy})
            })
          )
        },
        onError: (action, error) => {
          return AuthActions.authUserFailed({error: error})
        }
      })
    )
  )

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.fetchUser),
      fetch({
        run: () => {
          this.authService.getUser().pipe(
            map((user) => {
              return AuthActions.fetchUserSuccess({authUser: user})
            })
          )
        },
        onError: (action, error) => {
          return AuthActions.fetchUserFailed({error: error})
        }
      })
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      fetch({
        run: () => {
          console.log('logout start in effect')
          return this.authService.logout().pipe(
            map(() => {
                console.log('AAAAAA')
                return AuthActions.logoutSuccess()
              }
            ))
        },
        onError: (action, error) => {
          console.log('Error', error);
        }
      })
    )
  )

  constructor(private readonly actions$: Actions,
              private authService: AuthService,
              private commonUtil: CommonUtil) {
  }
}
