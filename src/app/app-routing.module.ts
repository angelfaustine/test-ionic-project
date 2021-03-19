import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./pages/character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'character-detail',
    loadChildren: () => import('./pages/character-detail/character-detail.module').then( m => m.CharacterDetailPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.cardPageModule)
  },
  {
    path: 'weapon',
    loadChildren: () => import('./pages/weapon/weapon.module').then( m => m.WeaponPageModule)
  },
  {
    path: 'weapon-detail',
    loadChildren: () => import('./pages/weapon-detail/weapon-detail.module').then( m => m.WeaponDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
