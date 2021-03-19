import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponDetailPageRoutingModule } from './weapon-detail-routing.module';

import { WeaponDetailPage } from './weapon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponDetailPageRoutingModule
  ],
  declarations: [WeaponDetailPage]
})
export class WeaponDetailPageModule {}
