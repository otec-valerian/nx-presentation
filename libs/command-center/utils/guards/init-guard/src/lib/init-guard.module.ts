import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InitGuard} from "./init-guard";
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
    InitGuard,
    AuthFacade
  ]
})
export class InitGuardModule {
}
