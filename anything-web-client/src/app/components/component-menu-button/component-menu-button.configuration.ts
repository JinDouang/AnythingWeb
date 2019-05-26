import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentMenuButtonComponent} from './component-menu-button.component';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../core/pipes/pipes.module';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [ComponentMenuButtonComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  PipesModule
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [ComponentMenuButtonComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
