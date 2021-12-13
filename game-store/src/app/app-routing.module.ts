import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameComponent } from './game-list/add-game/add-game.component';
import { GameListComponent } from './game-list/game-list.component';
import { UpdateComponent } from './game-list/update/update.component';

const routes: Routes = [
  { path: 'gameList', component: GameListComponent },
  { path: 'gameList/create', component: AddGameComponent },
  { path: 'gameList/update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
