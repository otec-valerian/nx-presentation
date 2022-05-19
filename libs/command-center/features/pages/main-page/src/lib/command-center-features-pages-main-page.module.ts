import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page-component/main-page.component';
import {MainPageRouter} from "./router";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    CommonModule,
    MainPageRouter,
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [MainPageComponent],
})

export class CommandCenterFeaturesPagesMainPageModule {
}
