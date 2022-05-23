import { NgModule } from '@angular/core';
import {InitGuard} from "./init-guard";
import {NeptunSimulatorDataAccessStatesInitModule} from "@nx-presentation/neptun-simulator/data-access/states/init";

@NgModule({
  imports: [
    NeptunSimulatorDataAccessStatesInitModule
  ],
  providers: [
    InitGuard
  ]
})
export class NeptunSimulatorUtilsGuardsInitGuardModule {}
