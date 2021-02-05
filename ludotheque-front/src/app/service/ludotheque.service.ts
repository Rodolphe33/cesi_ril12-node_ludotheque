import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Game } from '../models/game';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LudothequeService {
  constructor(private http: HttpClient) { }



  getAllGames() {
    return this.http.get<Game>("http://localhost:8080/games");
  }

}
