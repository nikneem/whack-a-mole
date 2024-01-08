import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationJoinPageComponent } from './registration-join-page/registration-join-page.component';

@NgModule({
  declarations: [RegistrationPageComponent, RegistrationJoinPageComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RegistrationModule {}
