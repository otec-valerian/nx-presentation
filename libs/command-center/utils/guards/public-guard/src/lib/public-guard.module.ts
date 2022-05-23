import {NgModule} from '@angular/core';
import {PublicGuard} from "./public-guard";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    CommandCenterDataAccessAuthStateModule
  ],
  providers: [
    PublicGuard
  ]
})
export class PublicGuardModule {
}
