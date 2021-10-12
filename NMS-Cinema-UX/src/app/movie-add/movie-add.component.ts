import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movie: Movie = new Movie();
  genres: Array<Genre> = new Array<Genre>();

  constructor(private _movieSvc: MovieService, private _genreSvc: GenreService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this._genreSvc.getGenres().subscribe(
      result=>{
        this.genres=result;
      },
      error=>{
        console.log("Error: Unable to get Genres");
      });
  }

  addMovie() {
    // TODO: remove this logging
    console.log(this.movie);
    
    this._movieSvc.addMovie(this.movie).subscribe(
      result=>{},
      error=>{
        console.log("Error occured while added the movie. ErrMsg: " + error);
        
      });

  }

}
