import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-component/login-component";

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
export class LoginPageRouter {}
