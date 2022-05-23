import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page-component/main-page.component';
import {MainPageRouter} from "./router";
import {CommandCenterDataAccessAuthStateModule} from "@nx-presentation/command-center/data-access/auth-state";

@NgModule({
  imports: [
    MainPageRouter,
    CommandCenterDataAccessAuthStateModule
  ],
  declarations: [MainPageComponent],
})

export class CommandCenterFeaturesPagesMainPageModule {
}
