import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { LudothequeService } from '../service/ludotheque.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public games

  constructor(private ludothequeService:LudothequeService) {
  }

  ngOnInit(): void {
    this.ludothequeService.getAllGames().subscribe(data => {
      this.games=data;
    });
  }

  public openGame(url:string):void {
    var win = window.open(url, '_blank');
    win.focus();
  }

}
