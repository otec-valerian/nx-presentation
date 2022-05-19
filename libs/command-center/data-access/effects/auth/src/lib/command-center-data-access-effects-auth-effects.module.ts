import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth.effects";
import {CommandCenterFeaturesApiAuthModule} from "@nx-presentation/command-center/features/api/auth";


@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    CommandCenterFeaturesApiAuthModule
  ],
})
export class CommandCenterDataAccessEffectsAuthEffectsModule {}
