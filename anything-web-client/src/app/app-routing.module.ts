import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingKeys} from './core/routing/routing-keys';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/view-home/view-home.module#ViewHomeModule'
  },
  {
    path: RoutingKeys.register,
    loadChildren: './views/view-register/view-register.module#ViewRegisterModule',
    data: {
      title: 'register',
    },
  },
  {
    path: RoutingKeys.authentication,
    loadChildren: './views/view-authentication/view-authentication.module#ViewAuthenticationModule',
    data: {
      title: 'authentication',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      /** Makes the router log all its internal events to the console.
       * enableTracing?: boolean;
       */
      /** Enables the location strategy that uses the URL fragment instead of the history API.
       * useHash: false,
       */
      /** A custom error handler.
       * errorHandler?: ErrorHandler;
       */
      /** Configures a preloading strategy. See {@link PreloadAllModules}.
       * preloadingStrategy: PreloadAllModules
       */
      initialNavigation: 'enabled', // ISSUE https://github.com/angular/angular/issues/23427
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
