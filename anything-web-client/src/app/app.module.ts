import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentNavbarModule} from './components/component-nav-bar/component-navbar.module';
import {AuthenticationService} from './services/authentication/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/Translate/translate.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentNavbarModule,
  ],
  providers: [
    AuthenticationService,
    TranslateService,
    /* APP_INITIALIZER that allows to initialize and configure our providers before the application starts. */
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('fr');
}
