import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentMenuButtonComponent} from './component-menu-button.component';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../core/pipes/pipes.module';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [ComponentMenuButtonComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
  PipesModule
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [ComponentMenuButtonComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
