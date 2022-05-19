import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicGuard} from "./public-guard";
import {
  AuthFacade,
  CommandCenterDataAccessAuthStateModule
} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    CommonModule,
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [],
  providers: [
    PublicGuard,
    AuthFacade
  ]
})
export class PublicGuardModule {
}
