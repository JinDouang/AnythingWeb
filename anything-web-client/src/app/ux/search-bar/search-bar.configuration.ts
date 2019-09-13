import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication/authentication.service';

export const MODULE_PROVIDERS: Provider[] = [
  AuthenticationService
];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [SearchBarComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [SearchBarComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
