import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import * as fromAuth from "./+state/auth.reducer";
import {AuthFacade} from "./+state/auth.facade";

@NgModule({
  imports: [
    StoreModule.forFeature(fromAuth.NEPTUN_SIMULATOR_AUTH_FEATURE_KEY, fromAuth.reducer)
  ],
  providers: [
    AuthFacade
  ]
})
export class NeptunSimulatorDataAccessStatesAuthModule {
}
