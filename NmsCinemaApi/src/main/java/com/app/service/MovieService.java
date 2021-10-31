package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.model.Movie;

public interface MovieService {
	public List<Movie> getMovies();
	public Optional<Movie> findMovieById(long id);
	public Movie addMovie(Movie movie);
	public void deleteMovieById(long id);
	public Movie updateMovie(Movie movie, long id);

}
