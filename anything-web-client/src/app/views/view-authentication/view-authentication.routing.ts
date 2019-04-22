import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewAuthenticationComponent} from './view-authentication.component';


const routes: Routes = [
  {
    path: '',
    component: ViewAuthenticationComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewAuthenticationRouting {
}
