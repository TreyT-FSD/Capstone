import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from "../models/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  GENRE_API: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

    getGenres(): Observable<Array<Genre>> {
        return this._http.get<Array<Genre>>(this.GENRE_API + "/genre");
    }
}