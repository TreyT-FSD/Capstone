import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  MOVIE_API: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

    getMovies(): Observable<Array<Movie>> {
        return this._http.get<Array<Movie>>(this.MOVIE_API + "/movie");
    }

    // updatePassword(admin: Movie): Observable<Admin> {
    //     return this._http.put<Movie>(this.MOVIE_API + "/admin/" + admin.id, admin);
    // }
}
