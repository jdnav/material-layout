import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MatListModule,
} from '@angular/material';


@NgModule({
  declarations: [MainMenuComponent, MainHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [
    MainMenuComponent,
    MainHeaderComponent
  ]
})
export class NavMenusModule { }
