import {ModuleWithProviders, Provider, SchemaMetadata, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewRegisterComponent} from './view-register.component';
import {ViewRegisterRouting} from './view-register.routing';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../../core/pipes/pipes.module';

export const MODULE_PROVIDERS: Provider[] = [];

export const MODULE_DECLARATIONS: Array<Type<any> | any[]> = [
  ViewRegisterComponent
];

export const MODULE_IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  CommonModule,
  ViewRegisterRouting,
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
