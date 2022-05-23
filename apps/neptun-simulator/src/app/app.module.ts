import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {NeptunSimulatorRouterModule} from "./router";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {NeptunSimulatorDataAccessEffectsAuthModule} from "@nx-presentation/neptun-simulator/data-access/effects/auth";
import {
  NeptunSimulatorDataAccessEffectsRouterModule
} from "@nx-presentation/neptun-simulator/data-access/effects/router";
import {NeptunSimulatorUtilsGuardsInitGuardModule} from "@nx-presentation/neptun-simulator/utils/guards/init-guard";
import {
  NeptunSimulatorUtilsGuardsPrivateGuardModule
} from "@nx-presentation/neptun-simulator/utils/guards/private-guard";
import {NeptunSimulatorUtilsGuardsPublicGuardModule} from "@nx-presentation/neptun-simulator/utils/guards/public-guard";
import {NeptunSimulatorDataAccessEffectsInitModule} from "@nx-presentation/neptun-simulator/data-access/effects/init";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    NeptunSimulatorRouterModule,
    NeptunSimulatorUtilsGuardsInitGuardModule,
    NeptunSimulatorUtilsGuardsPrivateGuardModule,
    NeptunSimulatorUtilsGuardsPublicGuardModule,
    NeptunSimulatorDataAccessEffectsAuthModule,
    NeptunSimulatorDataAccessEffectsRouterModule,
    NeptunSimulatorDataAccessEffectsInitModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
