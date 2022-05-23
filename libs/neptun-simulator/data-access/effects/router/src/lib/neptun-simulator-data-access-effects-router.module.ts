import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {RouterEffects} from "./router-effects";
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";

@NgModule({
  imports: [
    EffectsModule.forFeature([RouterEffects]),
    NeptunSimulatorDataAccessStatesAuthModule
  ],
})
export class NeptunSimulatorDataAccessEffectsRouterModule {}
