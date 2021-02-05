import { Component, OnInit } from '@angular/core';
import { LudothequeService } from '../service/ludotheque.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-upload',
  templateUrl: './game-upload.component.html',
  styleUrls: ['./game-upload.component.css']
})
export class GameUploadComponent implements OnInit {
  public gameName:string;
  public gameURL:string;
  public gameDesc:string;

  constructor(private ludothequeService: LudothequeService) { }

  ngOnInit(): void {
  }

  addGame() {
    console.log(this.gameName);
    console.log(this.gameURL);
    console.log(this.gameDesc.value);
    let game:Game = new Game(this.gameName,this.gameURL,this.gameDesc);
    this.ludothequeService.addGame(game);
 }

}
