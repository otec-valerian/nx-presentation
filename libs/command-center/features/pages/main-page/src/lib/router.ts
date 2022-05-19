import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "./main-page-component/main-page.component";

const routes = [
  {
    path: '',
    component: MainPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
]
})
export class MainPageRouter {}
