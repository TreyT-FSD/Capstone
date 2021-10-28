import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  isMovieAdded: boolean = true;

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
    this._movieSvc.addMovie(this.movie).subscribe(
      result=>{
        if(result == null){
          this.isMovieAdded=false;
        }
      },
      error=>{
        console.log("Error occured while trying to add the movie");
      });
  }

  resetAddMovieForm(mf:NgForm){
    mf.resetForm();
    this.isMovieAdded=true;
  }

}
