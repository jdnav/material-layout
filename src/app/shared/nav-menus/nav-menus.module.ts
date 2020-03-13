import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';



@NgModule({
  declarations: [MainMenuComponent, MainHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuComponent,
    MainHeaderComponent
  ]
})
export class NavMenusModule { }
