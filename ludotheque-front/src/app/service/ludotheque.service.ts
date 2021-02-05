import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};

@Injectable()
export class LudothequeService {
  constructor(private http: HttpClient) { }


  getAllGames() {
    return this.http.get<Game>("http://localhost:8080/api/games/all", httpOptions);
  }

  addGame(game:Game) {
    return this.http.post<Game>("http://localhost:8080/api/games/add", game, httpOptions);
  }

}
