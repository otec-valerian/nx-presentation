import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {InitActions} from '@nx-presentation/neptun-simulator/data-access/states/init'
import {AuthFacade} from "@nx-presentation/neptun-simulator/data-access/states/auth";
import {filter, map} from "rxjs";
import {fetch} from "@nrwl/angular";

@Injectable()
export class InitEffect {

  constructor(private readonly actions$: Actions,
              private authFacade: AuthFacade) {
  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InitActions.init),
      fetch({
        run: () => {
          // list there all facades` inits
          this.authFacade.init();
          // in condition of multiple inits - it is meant to use forkJoin operator
          return this.authFacade.loaded$.pipe(
            filter(isLoaded => isLoaded),
            map(() => {
              return InitActions.initSuccess();
            })
          )
        },
      })
    )
  );
}
