import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {SearchBarModule} from '../search-bar/search-bar.module';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {MenuButtonModule} from '../menu-button/menu-button.module';
import {PipesModule} from '../../core/pipes/pipes.module';

export const MODULE_PROVIDERS: Provider[] = [
  AuthenticationService
];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [NavbarComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
  SearchBarModule,
  MenuButtonModule,
  PipesModule
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [NavbarComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
