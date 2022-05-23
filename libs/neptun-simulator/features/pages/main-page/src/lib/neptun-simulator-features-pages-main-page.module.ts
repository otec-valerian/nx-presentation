import { NgModule } from '@angular/core';
import {MainComponent} from "./main-component/main-component";
import {MainPageRouter} from "./router";
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";

@NgModule({
  imports: [
    MainPageRouter,
    NeptunSimulatorDataAccessStatesAuthModule
  ],
  declarations: [
    MainComponent
  ]
})
export class NeptunSimulatorFeaturesPagesMainPageModule {}
