import { NgModule } from '@angular/core';
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";
import {EffectsModule} from "@ngrx/effects";
import {RouterEffects} from "./router-effects";

@NgModule({
  imports: [
    EffectsModule.forFeature([RouterEffects]),
    CommandCenterDataAccessAuthStateModule
  ],
})
export class CommandCenterDataAccessRouterEffectsModule {}
