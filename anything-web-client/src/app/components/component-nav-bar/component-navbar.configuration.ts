import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentNavbarComponent} from './component-navbar.component';
import {RouterModule} from '@angular/router';
import {ComponentSearchBarModule} from '../component-search-bar/component-search-bar.module';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {HttpClientModule} from '@angular/common/http';

export const MODULE_PROVIDERS: Provider[] = [
  AuthenticationService
];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [ComponentNavbarComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ComponentSearchBarModule
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [ComponentNavbarComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
