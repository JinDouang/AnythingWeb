import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarModule} from './ux/nav-bar/navbar.module';
import {AuthenticationService} from './services/authentication/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/Translate/translate.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterService} from './services/register/register.service';
import {TransferHttpModule} from './core/interceptors/http/transfert-http-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    TransferHttpModule
  ],
  providers: [
    AuthenticationService,
    TranslateService,
    RegisterService,
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
