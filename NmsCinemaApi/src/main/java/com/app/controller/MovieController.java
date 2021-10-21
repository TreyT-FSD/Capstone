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

import com.app.model.Movie;
import com.app.service.MovieServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/movie")
public class MovieController {

	@Autowired
	MovieServiceImp movieSvc;

	// get all
	@GetMapping("")
	public ResponseEntity<List<Movie>> getMovies() {
		try {
			List<Movie> movies = new ArrayList<Movie>();
			movieSvc.getMovies().forEach(movies::add);
			if (movies.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
			} else {
				return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// get by id
	@GetMapping("/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable long id) {
		Optional<Movie> movie = movieSvc.findMovieById(id);
		if (movie.isPresent()) {
			return new ResponseEntity<Movie>(movie.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	// add
	@PostMapping("")
	public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
		Movie m = movieSvc.addMovie(
			new Movie(
				movie.getTitle(),
				movie.getDescription(),
				movie.getDuration(),
				movie.getGenreId(),
				movie.getTicketPrice(),
				movie.getLanguage(),
				movie.getShowtimes(),
				movie.getAvailableTickets(),
				movie.isActive()
			));
		if(m != null) {
			return new ResponseEntity<Movie>(m, HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

	}

	// delete by id
	@DeleteMapping("/{id}")
	public ResponseEntity<Movie> deleteById(@PathVariable long id) {
		movieSvc.deleteMovieById(id);
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);

	}

	// update
	@PutMapping("/{id}")
	public ResponseEntity<Movie> updateMovieById(@PathVariable long id, @RequestBody Movie movie) {
		Movie m = movieSvc.updateMovie(movie, id);
		if(m != null) {
			return new ResponseEntity<Movie>(m, HttpStatus.OK);
		}
		return new ResponseEntity<Movie>(m, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
