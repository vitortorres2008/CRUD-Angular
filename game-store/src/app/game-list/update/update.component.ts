import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestGame } from 'src/app/model/request-game.interface';
import { GameService } from '../game.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: any;
  request!: RequestGame;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(this.id).subscribe(res => {
      this.request = {
        name: `${res.name}`,
        plataforms: `${res.plataforms}`,
        tags: `${res.tags}`,
        price: <number><unknown>`${res.price}`,
        age: `${res.age}`
      }
    })
  }

  updateGame() {
    this.gameService.putGame(this.id, this.request).subscribe();
    this.router.navigate(['/gameList'])
  }
}
