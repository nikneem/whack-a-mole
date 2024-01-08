import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ComponentsModule, TranslateModule],
  exports: [MaterialModule, ComponentsModule, TranslateModule],
})
export class SharedModule {}
