import { NgModule } from '@angular/core';
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";
import {PublicGuard} from "./public-guard";

@NgModule({
  imports: [
    NeptunSimulatorDataAccessStatesAuthModule
  ],
  providers: [
    PublicGuard
  ]
})
export class NeptunSimulatorUtilsGuardsPublicGuardModule {}
