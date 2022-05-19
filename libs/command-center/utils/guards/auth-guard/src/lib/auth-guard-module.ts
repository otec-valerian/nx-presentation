import {NgModule} from "@angular/core";
import {
  AuthFacade,
  CommandCenterDataAccessAuthStateModule
} from "@nx-presentation/command-center/data-access/auth-state";
import {AuthGuard} from "./auth-guard";

@NgModule({
  imports: [
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthFacade
  ]
})

export class AuthGuardModule {
}
