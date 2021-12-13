import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './game-list/game.service';
import { HttpClientModule } from '@angular/common/http';
import { AddGameComponent } from './game-list/add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './game-list/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    AddGameComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
