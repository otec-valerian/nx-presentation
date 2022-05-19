import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import * as fromAuth from "./+state/auth.reducer";
import {AuthFacade} from "./+state/auth.facade";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.COMMAND_CENTER_AUTH_FEATURE_KEY, fromAuth.reducer)
  ],
  providers: [
    AuthFacade
  ]
})
export class CommandCenterDataAccessAuthStateModule {
}
