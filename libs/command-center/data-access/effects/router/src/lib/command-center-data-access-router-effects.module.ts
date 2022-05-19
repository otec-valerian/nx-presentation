import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";
import {EffectsModule} from "@ngrx/effects";
import {RouterEffects} from "./router-effects";
// import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RouterEffects]),
    CommandCenterDataAccessAuthStateModule
  ],
})
export class CommandCenterDataAccessRouterEffectsModule {}
