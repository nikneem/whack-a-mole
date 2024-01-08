import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolehillComponent } from './molehill/molehill.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [MolehillComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [MolehillComponent, LoadingComponent],
})
export class ComponentsModule {}
