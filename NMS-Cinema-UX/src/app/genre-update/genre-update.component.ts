import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-update',
  templateUrl: './genre-update.component.html',
  styleUrls: ['./genre-update.component.css']
})
export class GenreUpdateComponent implements OnInit {
  
  genre: Genre | undefined;

  constructor(
    private _genreSvc: GenreService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.getGenre();
  }

  getGenre(){
    const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
    console.assert(id !== null);
    this._genreSvc.getGenreById(id).subscribe(
      result=>{
        this.genre=result;
      },
      error=>{
        console.log("failed to retrieve the genre by id. id=" + id);
      });
  }

  updateGenre(){
    if(this.genre !== undefined){
      this._genreSvc.updateGenreById(this.genre.id, this.genre).subscribe(
        result=>{
          this._router.navigate(['admin']);
        },
        error=>{
          console.log("An error occured while updating the genre. Please try again.");
        });
    }
  }

}
