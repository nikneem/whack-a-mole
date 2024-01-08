import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { MainTemplateComponent } from '../../template/main/main-template/main-template.component';
import { RegistrationJoinPageComponent } from './registration-join-page/registration-join-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      { path: 'register', component: RegistrationPageComponent },
      { path: 'join', component: RegistrationJoinPageComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
