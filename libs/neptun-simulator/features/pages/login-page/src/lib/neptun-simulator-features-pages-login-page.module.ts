import { NgModule } from '@angular/core';
import {NeptunSimulatorDataAccessStatesAuthModule} from "@nx-presentation/neptun-simulator/data-access/states/auth";
import {LoginPageComponent} from "./login-component/login-component";
import {FormsModule} from "@angular/forms";
import {LoginPageRouter} from "./router";

@NgModule({
  imports: [
    NeptunSimulatorDataAccessStatesAuthModule,
    LoginPageRouter,
    FormsModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class NeptunSimulatorFeaturesPagesLoginPageModule {}
