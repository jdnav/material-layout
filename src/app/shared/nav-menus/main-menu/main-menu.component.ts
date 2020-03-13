import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MainMenuCategory } from './main-menu.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  /**
   * Menu categories
   */
  @Input() mainMenuOptions: MainMenuCategory[];


  /**
   * This event emitter gets emitted when the user selects an option.
   */
  @Output() selectedOption: EventEmitter<{ optionName: string, optionUrl: string }> = new EventEmitter();

  constructor() { }

  onMenuClick(optionName: string, optionUrl: string) {
    this.selectedOption.emit({ optionName: optionName, optionUrl: optionUrl });
  }

}
