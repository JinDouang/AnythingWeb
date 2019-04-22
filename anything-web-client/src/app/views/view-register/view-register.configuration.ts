import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewRegisterComponent} from './view-register.component';
import {ViewRegisterRouting} from './view-register.routing';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [
  ViewRegisterComponent
];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  ViewRegisterRouting
];

export const MODULE_EXPORTS: Array<Type<any> | any[]> = [];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [
];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
