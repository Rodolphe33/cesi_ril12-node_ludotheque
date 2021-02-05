import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-upload',
  templateUrl: './game-upload.component.html',
  styleUrls: ['./game-upload.component.css']
})
export class GameUploadComponent implements OnInit {
  public gameName;
  public gameURL;
  public gameDesc;

  constructor() { }

  ngOnInit(): void {
  }

  addGame() {
    console.log(this.gameName);
    console.log(this.gameURL);
    console.log(this.gameDesc.value);
 }

}
