import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import * as fromInit from './+state/init.reducer'
import {InitFacade} from "./+state/init.facade";

@NgModule({
  imports: [
    StoreModule.forFeature(fromInit.INIT_FEATURE_KEY, fromInit.reducer)
  ],
  providers: [
    InitFacade
  ]
})
export class NeptunSimulatorDataAccessStatesInitModule {}
