import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedFeaturesApiFirebaseModule} from "@nx-presentation/shared/features/api/firebase";
import {AuthService} from "./auth-service";

@NgModule({
  imports: [
    CommonModule,
    SharedFeaturesApiFirebaseModule
  ],
  providers: [AuthService],
})
export class CommandCenterFeaturesApiAuthModule {}
