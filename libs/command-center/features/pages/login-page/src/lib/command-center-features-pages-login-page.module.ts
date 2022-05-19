import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page-component/login-page.component';
import {CommandCenterLoginRouter} from "./router";
import {FormsModule} from "@angular/forms";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    CommonModule,
    CommandCenterLoginRouter,
    FormsModule,
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [LoginPageComponent]
})
export class CommandCenterFeaturesPagesLoginPageModule {
}
