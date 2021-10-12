import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.css']
})
export class GenreAddComponent implements OnInit {

  genre : Genre = new Genre();

  constructor(private _genreSvc: GenreService) { }

  ngOnInit(): void {
  }

  addGenre(){
    this._genreSvc.addGenre(this.genre).subscribe(
      result=>{
        this.genre=result;
      },
      error=>{
        console.log("An error occured while add the new genre.");
      });
  }

}
