import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/card/card.module').then(m => m.cardPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/character/character.module').then(m => m.CharacterPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/weapon/weapon.module').then(m => m.WeaponPageModule)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
