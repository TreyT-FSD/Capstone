import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres : Array<Genre> = new Array<Genre>();

  constructor(private _genreSvc: GenreService) { }

  ngOnInit(): void {
    this.getGenres();
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

  removeGenre(id:number){
    this._genreSvc.deleteGenreById(id).subscribe(
      result=>{
        this.ngOnInit();
      },
      error=>{
        console.log("Error occured while removing genre " + id);
      });
  }

}
