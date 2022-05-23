import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {FirebaseAuthService} from "./services/FirebaseAuthService";

@NgModule({
  imports: [
    AngularFireAuthModule
  ],
  providers: [
    FirebaseAuthService
  ]
})
export class SharedFeaturesApiFirebaseModule {}
