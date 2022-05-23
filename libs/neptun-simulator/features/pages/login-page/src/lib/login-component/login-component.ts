import {Component, OnInit} from "@angular/core";
import {AuthFacade} from "@nx-presentation/neptun-simulator/data-access/states/auth";

@Component({
  selector: 'nx-presentation-neptun-simulator-login-page',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss'],
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
