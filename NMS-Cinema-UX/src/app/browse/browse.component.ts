import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  movies: Array<Movie> = new Array<Movie>();
  genres : Array<Genre> = new Array<Genre>();

  constructor(
    private _movieSvc: MovieService,
    private _genreSvc: GenreService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

  getMovies(){
    this._movieSvc.getMovies().subscribe(
      result=>{
        this.movies=result;
      },
      error=>{
        console.log("error occured while getting movies");
      });
  }

  getGenres(){
    this._genreSvc.getGenres().subscribe(
      result=>{
        this.genres=result;
      },
      error=>{
        console.log("Failed to retrieve the genres");
      }
      );
  }


  addMovieToCart(id:number){
    // TODO: Implement add to cart
    console.log("Add Product to cart: " + id);
    
  }

  genreFilter(id:number){
    // TODO: implement genre filtering
    console.log("Genre Id: " + id);    
  }

}
