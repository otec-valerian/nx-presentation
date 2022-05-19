import {Component, OnInit} from '@angular/core';
import {AuthFacade} from "@nx-presentation/command-center/data-access/auth-state";

@Component({
  selector: 'nx-presentation-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {
  }

  email = '';
  password = '';

  ngOnInit(): void {
    console.log('init')
  }

  onRegisterClick(): void {
    this.authFacade.signIn({email: this.email, password: this.password})
  }
}
