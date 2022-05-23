import { NgModule } from '@angular/core';
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";
import {PrivateGuard} from "./private-guard";

@NgModule({
  imports: [
    NeptunSimulatorDataAccessStatesAuthModule
  ],
  providers: [
    PrivateGuard
  ]
})
export class NeptunSimulatorUtilsGuardsPrivateGuardModule {}
