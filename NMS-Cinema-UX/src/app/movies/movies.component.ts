import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie> = new Array<Movie>();
  genres: Array<Genre> = new Array<Genre>();

  constructor(private _movieService: MovieService, private _genreService: GenreService) { }

  ngOnInit(): void {
    // get the movies
    this._movieService.getMovies().subscribe(
      result => {
        this.movies = result;
      },
      error => {
        console.log(error);
      }
    );

    //get genres
    this._genreService.getGenres().subscribe(
      result => {
        this.genres = result;
      },
      error => {
        console.log(error);
      });
  }

  getGenreName(id: number): string | undefined {
    // TODO: Maybe some basic error handling incase we fail to get the list of genres
    let genreName = this.genres.find(element => element.id == id)?.name;

    return genreName;
  }

  removeMovie(id: number) {
    this._movieService.deleteMovieById(id).subscribe(
      result => {
        this.ngOnInit();
       },
      error => {
        console.log("an error occured while removing the movie. Try Again.");
        alert("An error occured while removing the movie. Please try again.")
      });
  }

  splitShowtimes(showtimes: string): Array<string>{
    let result = new Array<string>();
    // result = showtimes.split(",").forEach(showtime => showtime.trim());
    result = showtimes.split(",");
    result.forEach(str => str.trim());
    return result;
  }
}
