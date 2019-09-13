import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar.component';
import {RouterModule} from '@angular/router';

export const MODULE_PROVIDERS: Provider[] = [
];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [SideBarComponent];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  RouterModule,
];
export const MODULE_EXPORTS: Array<Type<any> | any[]> = [SideBarComponent];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
