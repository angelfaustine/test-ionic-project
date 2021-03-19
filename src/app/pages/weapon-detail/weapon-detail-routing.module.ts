import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponDetailPage } from './weapon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponDetailPageRoutingModule {}
