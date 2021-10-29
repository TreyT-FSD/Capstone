import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { CartService } from '../services/cart.service';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allMovies: Array<Movie> = new Array<Movie>();
  movies: Array<Movie> = new Array<Movie>();
  genres: Array<Genre> = new Array<Genre>();
  searchTerm: string = "";
  isGenreFilterApplied: boolean = false;
  sortBy: any[] = ["Genre", "A to Z",]

  time: string = "";
  quantity: number = 0;


  maxTicketQuantity = 10;

  constructor(
    private _movieSvc: MovieService,
    private _genreSvc: GenreService,
    private _cartSvc: CartService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();

    //check to see if there is a cart in local storage. 
    //if there is update the cart svc
    this._cartSvc.initCartFromStorage();
  }

  getMovies() {
    this._movieSvc.getMovies().subscribe(
      result => {
        if (result.length != 0) {
          result.forEach(movie => {
            if (movie.active) {
              this.allMovies.push(movie);
            }
          });
          this.movies = this.allMovies;
        }
      },
      error => {
        console.log("error occured while getting movies");
      });

  }

  getGenres() {
    this._genreSvc.getGenres().subscribe(
      result => {
        this.genres = result;
      },
      error => {
        console.log("Failed to retrieve the genres");
      }
    );
  }

  addMovieToCart(movie: Movie, form: NgForm) {

    let cartItem = new CartItem();
    cartItem.movie = movie;
    cartItem.showtime = form.value.showtime;
    cartItem.numTickets = parseInt(form.value.tickets);
    cartItem.subTotal = cartItem.numTickets * movie.ticketPrice;

    this._cartSvc.addToCart(cartItem);

    this._cartSvc.saveCart();

    // TODO: May want to consider having the cart also stored is local storage so that it persists between browser session

    form.resetForm();

    // TODO: Think about a nice way to notify user that add to cart has occured
    window.alert('Your product has been added to the cart!');

    //a sleeping function

    // (async () => {
    //   // Do something before delay
    //   console.log('before delay')

    //   await new Promise( resolve => setTimeout(resolve, 2000) );

    //   // Do something after
    //   console.log('after delay')

    // })();
  }

  genreFilter(id: number) {
    let movieSubset = new Array<Movie>();
    this.allMovies.forEach(element => {
      if (element.genreId == id) {
        movieSubset.push(element);
      }
    });
    this.movies = movieSubset;
  }

  clearGenreFilter() {
    this.movies = this.allMovies;
  }

  filterMovies(searchStr: string) {
    let movieSubset = new Array<Movie>();

    //if searchTerm not empty
    if (searchStr != "") {
      this.allMovies.forEach(element => {
        if (element.title.toLowerCase().includes(searchStr.toLowerCase())) {
          movieSubset.push(element);
        }
      });
      //console.log(productSubset);
      this.movies = movieSubset;
      this.searchTerm = "";
    }
    else {
      this.searchTerm = "";
      this.movies = this.allMovies;
    }
  }

  getGenreName(id: number): string | undefined {
    return this.genres.find(element => element.id == id)?.name;
  }

  counter(): Array<number> {
    return new Array(this.maxTicketQuantity);
  }

  getShowtimesFromMovie(movie: Movie): Array<string> {
    return movie.showtimes.split(",");
  }

  sortMoviesBy(sortOption: string, elmt: HTMLSelectElement) {
    console.log("sort by: " + sortOption);

    if (this.movies.length > 1) {

      if (sortOption == "Genre") {
        this.movies.sort((a, b) => this.getGenreName(a.genreId)! < this.getGenreName(b.genreId)! ? -1 : this.getGenreName(a.genreId)! > this.getGenreName(b.genreId)! ? 1 : 0)
        elmt.selectedIndex = 0;
      }
      else if (sortOption == "A to Z") {
        this.movies.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
        elmt.selectedIndex = 0;
      }
      else {
        this.movies = this.allMovies;
        elmt.selectedIndex = 0;
      }
    }

  }

  resetSort(elmt: HTMLSelectElement) {
    elmt.selectedIndex = 0;
    this.movies = this.allMovies;
  }

}
