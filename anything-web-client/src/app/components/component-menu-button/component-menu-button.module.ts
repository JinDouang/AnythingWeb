import {NgModule} from '@angular/core';
import {
  MODULE_DECLARATIONS,
  MODULE_EXPORTS,
  MODULE_IMPORTS,
  MODULE_PROVIDERS,
  MODULE_SCHEMAS,
  MODULE_ENTRYCOMPONENTS
} from './component-menu-button.configuration';

@NgModule({
  providers: MODULE_PROVIDERS,
  declarations: MODULE_DECLARATIONS,
  imports: MODULE_IMPORTS,
  exports: MODULE_EXPORTS,
  schemas: MODULE_SCHEMAS,
  entryComponents: MODULE_ENTRYCOMPONENTS
})
export class ComponentMenuButtonModule {
}
