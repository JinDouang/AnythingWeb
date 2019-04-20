import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ViewHomeRouting} from './view-home.routing';
import {ViewHomeComponent} from './view-home.component';
import {ComponentSideBarModule} from '../../components/component-side-bar/component-side-bar.module';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [
  ViewHomeComponent
];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  HttpClientModule,
  ViewHomeRouting,
  ComponentSideBarModule,
];

export const MODULE_EXPORTS: Array<Type<any> | any[]> = [];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [
];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
