package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Genre;
import com.app.service.GenreServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/genre")
public class GenreController {
	
	@Autowired
	GenreServiceImp genreSvc;

	// get all
	@GetMapping("")
	public ResponseEntity<List<Genre>> getGenres() {
		try {
			List<Genre> genres = new ArrayList<Genre>();
			genreSvc.getGenres().forEach(genres::add);
			if(genres.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<List<Genre>>(genres, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	// get by id
	@GetMapping("/{id}")
	public ResponseEntity<Genre> getGenreById(@PathVariable long id) {
		Optional<Genre> genre = genreSvc.findGenreById(id);
		if(genre.isPresent()) {
			return new ResponseEntity<Genre>(genre.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	// add
	@PostMapping("")
	public ResponseEntity<Genre> addGenre(@RequestBody Genre genre) {
		Genre g = genreSvc.addGenre(new Genre(genre.getName()));
		if(g != null) {
			return new ResponseEntity<Genre>(g, HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// delete by id
	@DeleteMapping("/{id}")
	public ResponseEntity<Genre> deleteById(@PathVariable long id) {
		genreSvc.deleteGenreById(id);
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

	// update
	@PutMapping("/{id}")
	public ResponseEntity<Genre> updateGenreById(@PathVariable long id, @RequestBody Genre genre) {
		Genre g = genreSvc.updateGenre(genre, id);
		if(g != null) {
			return new ResponseEntity<Genre>(g, HttpStatus.OK);
		}
		return new ResponseEntity<>(g, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
