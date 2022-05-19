import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {RouterModule} from "@angular/router";
import {CommandCenterRouterModule} from "./router";
import {AuthGuard, AuthGuardModule} from "@nx-presentation/command-center/utils/guards/auth-guard";
import {PublicGuardModule} from "@nx-presentation/command-center/utils/guards/public-guard";
import {InitGuardModule} from "@nx-presentation/command-center/utils/guards/init-guard";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {
  CommandCenterDataAccessEffectsAuthEffectsModule
} from "@nx-presentation/command-center/data-access/effects/auth-effects";
import {CommandCenterDataAccessRouterEffectsModule} from "@nx-presentation/command-center/data-access/effects/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    CommandCenterRouterModule,
    AuthGuardModule,
    PublicGuardModule,
    InitGuardModule,
    StoreModule.forRoot({}),
    CommandCenterDataAccessEffectsAuthEffectsModule,
    CommandCenterDataAccessRouterEffectsModule,
    EffectsModule.forRoot([
      CommandCenterDataAccessEffectsAuthEffectsModule,
      CommandCenterDataAccessRouterEffectsModule
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}
