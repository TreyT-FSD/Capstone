import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from "../models/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  //GENRE_API: string = "http://localhost:3000";
  GENRE_API: string = "http://localhost:8085"; //SpringBoot Rest API

  constructor(private _http: HttpClient) { }

    getGenres(): Observable<Array<Genre>> {
        return this._http.get<Array<Genre>>(this.GENRE_API + "/genre");
    }
    getGenreById(id: number): Observable<Genre> {
      return this._http.get<Genre>(this.GENRE_API + "/genre/" + id);
    }
  
    addGenre(genre: Genre): Observable<Genre> {
      return this._http.post<Genre>(this.GENRE_API + "/genre", genre);
    }
  
    deleteGenreById(id: number): Observable<Genre> {
      return this._http.delete<Genre>(this.GENRE_API + "/genre/" + id);
    }
  
    updateGenreById(id: number, genre: Genre): Observable<Genre> {
      return this._http.put<Genre>(this.GENRE_API + "/genre/" + id, genre);
    }
}