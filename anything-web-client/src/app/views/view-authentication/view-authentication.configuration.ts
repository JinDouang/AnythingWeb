import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewAuthenticationComponent} from './view-authentication.component';
import {ViewAuthenticationRouting} from './view-authentication.routing';
import {PipesModule} from '../../core/pipes/pipes.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [
  ViewAuthenticationComponent
];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  ViewAuthenticationRouting,
  ReactiveFormsModule,
  PipesModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

export const MODULE_EXPORTS: Array<Type<any> | any[]> = [];

export const MODULE_ENTRYCOMPONENTS: Array<Type<any> | any[]> = [
];

export const MODULE_SCHEMAS: Array<SchemaMetadata | any[]> = [];
