import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('hoverTitle', [
      state('unselected', style({
        fontWeight: 200,
        transform: 'scale(1)'
      })),
      state('selected', style({
        textShadow: '1px 1px 1px #000000',
        fontWeight: 200,
        transform: 'scale(1.02)'
      })),
      transition('unselected => selected', animate('150ms')),
      transition('selected => unselected', animate('150ms'))
    ])
  ]
})
export class MainHeaderComponent {

  /**
   * This event emitter gets emitted when the user clicks menu icon.
   */
  @Output() clickMainMenu: EventEmitter<void> = new EventEmitter();

  titleFocused = false;
  value: string;

  onSubmit(value): void {
    // console.log(value);
  }

  backToMainPage(): void {
    // console.log('Back to landing page');
  }

  // This event will be caught by "nav.component.ts"
  openMenu(): void {
    this.clickMainMenu.emit();
  }
}
