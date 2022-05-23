import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth.effects";
import {CommandCenterFeaturesApiAuthModule} from "@nx-presentation/command-center/features/api/auth";
import {SharedUtilsCommonUtilModule} from "@nx-presentation/shared/utils/common-util";


@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    CommandCenterFeaturesApiAuthModule,
    SharedUtilsCommonUtilModule
  ],
})
export class CommandCenterDataAccessEffectsAuthEffectsModule {}
