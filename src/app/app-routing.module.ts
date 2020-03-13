import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    // path: 'route-one',
    // component: /route-oneComponent, // Parent component must be set if "outlet" property appears!
    // loadChildren: './/route-one//route-one.module#/route-oneModule',
    // canActivate: [AuthGuard],
    // data: { shouldReuse: false }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
