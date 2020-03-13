import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { NAV_MAIN_MENU_CATALOG } from '../main-menu-catalog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output() openMenu: EventEmitter<void> = new EventEmitter();

  @ViewChild('mainMenu', { static: false }) mainMenu: MatSidenav;

  mainMenuConfig = NAV_MAIN_MENU_CATALOG;

  constructor(private router: Router, ) { }

  /**
   * It gets user's choice at main menu on the left
   * @param optionName 
   * @param optionUrl 
   */
  onMainMenuSelectedOption(optionName: string, optionUrl: string) {
    if (optionName === 'logout') {
      // this.auth.logout();
      this.mainMenu.close();
      return;
    }
    if (optionUrl) {
      this.router.navigateByUrl(optionUrl);
      this.mainMenu.close();
    }
  }

  /**
 * Function called when burger clicked in header
 */
  onMainMenuBurgerClicked() {

    // Toggle menu after checking permissions
    this.mainMenu.toggle();

  }

}
