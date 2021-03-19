import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { cardPageRoutingModule } from './card-routing.module';

import { cardPage } from './card.page';
import { Routes, RouterModule } from '@angular/router';
import { CardResolver } from './card.resolver';
import { ServicesService } from 'src/app/services/services.service';

const routes: Routes = [
  {
    path: '',
    component: cardPage,
    resolve: {
      data: CardResolver
    }
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    cardPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [cardPage],
  providers: [
    CardResolver,
    ServicesService
  ]
})
export class cardPageModule {}
