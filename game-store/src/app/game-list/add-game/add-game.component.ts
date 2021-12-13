import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGame } from 'src/app/model/request-game.interface';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  request: RequestGame = {
    name: '',
    plataforms: '',
    tags: '',
    price: <number><unknown>'',
    age: ''
  };

  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit(): void { }

  addGame(){
    this.gameService.postGames(this.request).subscribe()
    this.router.navigate(['/gameList'])
  }

}
