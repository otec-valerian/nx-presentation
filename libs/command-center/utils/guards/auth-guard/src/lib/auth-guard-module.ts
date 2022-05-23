import {NgModule} from "@angular/core";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";
import {AuthGuard} from "./auth-guard";

@NgModule({
  imports: [
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})

export class AuthGuardModule {
}
