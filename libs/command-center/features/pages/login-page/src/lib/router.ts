import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-page-component/login-page.component";

const routes = [
  {
    path: '',
    component: LoginPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CommandCenterLoginRouter{}
