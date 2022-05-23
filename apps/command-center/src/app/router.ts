import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "@nx-presentation/command-center/utils/guards/auth-guard";
import {InitGuard} from "@nx-presentation/command-center/utils/guards/init-guard";
import {PublicGuard} from "@nx-presentation/command-center/utils/guards/public-guard";

const routes = [
  {
    path: '',
    canActivate: [InitGuard],
    children: [
      {
        path: 'login',
        canActivate: [PublicGuard],
        loadChildren: () =>
          import('@nx-presentation/command-center/features/pages/login-page').then(
            (module) => module.CommandCenterFeaturesPagesLoginPageModule
          ),
      },
      {
        path: 'main-page',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@nx-presentation/command-center/features/pages/main-page').then(
            (module) => module.CommandCenterFeaturesPagesMainPageModule
          ),
      },
      {
        path: '**',
        redirectTo: 'main-page'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class CommandCenterRouterModule {
}




