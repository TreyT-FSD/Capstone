import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //MOVIE_API: string = "http://localhost:3000";
  MOVIE_API: string = "http://localhost:8085"; //SpringBoot Rest API

  constructor(private _http: HttpClient) { }

  getMovies(): Observable<Array<Movie>> {
    return this._http.get<Array<Movie>>(this.MOVIE_API + "/movie");
  }

  getMovieById(id: number): Observable<Movie> {
    return this._http.get<Movie>(this.MOVIE_API + "/movie/" + id);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this._http.post<Movie>(this.MOVIE_API + "/movie", movie);
  }

  deleteMovieById(id: number): Observable<Movie> {
    return this._http.delete<Movie>(this.MOVIE_API + "/movie/" + id);
  }

  updateMovieById(id: number, movie: Movie): Observable<Movie> {
    return this._http.put<Movie>(this.MOVIE_API + "/movie/" + id, movie);
  }
}
