import { NgModule } from '@angular/core';
import {TranslatePipeModule} from './translate/translate.pipe.module';

@NgModule({
  imports: [TranslatePipeModule],
  exports: [TranslatePipeModule],
  declarations: [],
  providers: [],
})
export class PipesModule {}
