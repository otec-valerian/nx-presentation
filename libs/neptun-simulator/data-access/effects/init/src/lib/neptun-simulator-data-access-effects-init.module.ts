import { NgModule } from '@angular/core';
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";
import {EffectsModule} from "@ngrx/effects";
import {InitEffect} from "./init.effect";

@NgModule({
  imports: [
    NeptunSimulatorDataAccessStatesAuthModule,
    EffectsModule.forFeature([InitEffect])
  ],
  providers: [

  ]
})
export class NeptunSimulatorDataAccessEffectsInitModule {}
