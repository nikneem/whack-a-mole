import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template/main-template.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainTemplateComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class MainModule {}
