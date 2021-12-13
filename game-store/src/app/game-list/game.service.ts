import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestGame } from '../model/request-game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  postGames(request: RequestGame): Observable<any>{
    return this.http.post<any>(this.url, request);
  }

  getGame(id: string): Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.get<any>(_url);
  }

  putGame(id: string, request: any): Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.put<any>(_url, request)
  }

  deleteGame(id: number): Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }
}
