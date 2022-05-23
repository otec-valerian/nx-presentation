import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {InitGuard} from "@nx-presentation/neptun-simulator/utils/guards/init-guard";
import {PublicGuard} from "@nx-presentation/neptun-simulator/utils/guards/public-guard";
import {PrivateGuard} from "@nx-presentation/neptun-simulator/utils/guards/private-guard";

const routes = [
  {
    path: '',
    canActivate: [InitGuard],
    children: [
      {
        path: 'login',
        canActivate: [PublicGuard],
        loadChildren: () =>
          import('@nx-presentation/neptun-simulator/features/pages/login-page').then(
            (module) => module.NeptunSimulatorFeaturesPagesLoginPageModule
          ),
      },
      {
        path: 'main-page',
        canActivate: [PrivateGuard],
        loadChildren: () =>
          import('@nx-presentation/neptun-simulator/features/pages/main-page').then(
            (module) => module.NeptunSimulatorFeaturesPagesMainPageModule
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
export class NeptunSimulatorRouterModule {
}




