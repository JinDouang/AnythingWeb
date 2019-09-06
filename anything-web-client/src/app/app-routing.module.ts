import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingKeys} from './core/routing/routing-keys';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/view-home/view-home.module').then(m => m.ViewHomeModule)
  },
  {
    path: RoutingKeys.register,
    loadChildren: () => import('./views/view-register/view-register.module').then(m => m.ViewRegisterModule),
    data: {
      title: 'register',
    },
  },
  {
    path: RoutingKeys.authentication,
    loadChildren: () => import('./views/view-authentication/view-authentication.module').then(m => m.ViewAuthenticationModule),
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
