import {Component, OnInit} from "@angular/core";
import {AuthFacade} from "@nx-presentation/neptun-simulator/data-access/states/auth";

@Component({
  selector: 'nx-presentation-neptun-simulator-main-page',
  templateUrl: './main-component.html',
  styleUrls: ['./main-component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {
  }

  ngOnInit(): void {
    console.log('init')
  }

  onLogoutClick(): void {
    this.authFacade.logout()
  }
}
