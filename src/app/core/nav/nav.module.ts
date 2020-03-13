import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatSidenavModule } from '@angular/material';
import { NavMenusModule } from 'src/app/shared/nav-menus/nav-menus.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    NavMenusModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
