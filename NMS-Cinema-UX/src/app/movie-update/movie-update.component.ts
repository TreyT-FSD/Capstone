import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movie: Movie | undefined;
  genres: Array<Genre> = new Array<Genre>();

  constructor(
    private _movieSvc: MovieService,
    private _genreSvc: GenreService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.getMovie();
    this.getGenres();
  }

  getMovie() {
    const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
    console.assert(id !== null);
    this._movieSvc.getMovieById(id).subscribe(
      result => {
        this.movie=result;
        console.log(this.movie);
      },
      error => {
        console.log("An error occured while retrieving the Movie. Err: " + error);
      });
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

  updateMovie() {
    if (this.movie !== undefined) {
      this._movieSvc.updateMovieById(this.movie.id, this.movie).subscribe(
        result => {
          this._router.navigate(['admin']);
        },
        error => {
          console.log("An error occured while updating the movie. Please try again.");
        });
    }
  }

}
