import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {FirebaseAuthService} from "./services/FirebaseAuthService";

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseAuthService
  ]
})
export class SharedFeaturesApiFirebaseModule {}
