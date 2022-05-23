import {NgModule} from '@angular/core';
import {InitGuard} from "./init-guard";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    CommandCenterDataAccessAuthStateModule
  ],
  providers: [
    InitGuard
  ]
})
export class InitGuardModule {
}
