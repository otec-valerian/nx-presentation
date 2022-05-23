import { NgModule } from '@angular/core';
import {SharedFeaturesApiFirebaseModule} from "@nx-presentation/shared/features/api/firebase";
import {AuthService} from "./auth-service";

@NgModule({
  imports: [
    SharedFeaturesApiFirebaseModule
  ],
  providers: [AuthService],
})
export class CommandCenterFeaturesApiAuthModule {}
