import {Component, OnInit} from '@angular/core';
import {AuthFacade} from "@nx-presentation/command-center/data-access/auth-state";

@Component({
  selector: 'nx-presentation-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  constructor(private authFacade: AuthFacade) {
  }

  ngOnInit(): void {
  }

  onLogoutClick(): void {
    this.authFacade.logout()
  }
}
