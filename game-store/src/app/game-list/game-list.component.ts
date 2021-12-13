import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  responseGames: any[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(res => {
      this.responseGames = res;
      console.log(this.responseGames);
    });
  }

  deleteGame(id: number){
    this.gameService.deleteGame(id).subscribe()
  }

}
