import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public games:Array<Game> = [];

  constructor() {
    let game1 = new Game("Morpio","http://localhost","Le morpion est un jeu de réflexion se pratiquant à deux joueurs au tour par tour et dont le but est de créer le premier un alignement sur une grille. Le jeu se joue généralement avec papier et crayon.");
    this.games.push(game1,game1,game1);
  }

  ngOnInit(): void {
  }

  public openGame(url:string):void {
    var win = window.open(url, '_blank');
    win.focus();
  }

}
