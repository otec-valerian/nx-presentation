import { NgModule } from '@angular/core';
import {NeptunSimulatorFeaturesApiAuthModule} from "@nx-presentation/neptun-simulator/features/api/auth";
import {SharedUtilsCommonUtilModule} from "@nx-presentation/shared/utils/common-util";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth.effects";

@NgModule({
  imports: [
    NeptunSimulatorFeaturesApiAuthModule,
    SharedUtilsCommonUtilModule,
    EffectsModule.forFeature([AuthEffects])
  ],
})
export class NeptunSimulatorDataAccessEffectsAuthModule {}
