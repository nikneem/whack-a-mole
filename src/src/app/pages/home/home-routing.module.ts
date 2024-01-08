import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainTemplateComponent } from '../../template/main/main-template/main-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    pathMatch: 'full',
    children: [{ path: '', component: HomePageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
