package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MovieDao;
import com.app.model.Movie;

@Service
public class MovieServiceImp implements MovieService {

	@Autowired
	MovieDao movieDao;

	@Override
	public List<Movie> getMovies() {
		return movieDao.findAll();
	}

	@Override
	public Optional<Movie> findMovieById(long id) {
		return movieDao.findById(id);
	}

	@Override
	public Movie addMovie(Movie movie) {
		return movieDao.save(
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
	}

	@Override
	public void deleteMovieById(long id) {
		movieDao.deleteById(id);
	}

	@Override
	public Movie updateMovie(Movie movie, long id) {

		return movieDao.findById(id).map(
				m -> {
					m.setTitle(movie.getTitle());
					m.setDescription(movie.getDescription());
					m.setDuration(movie.getDuration());
					m.setGenreId(movie.getGenreId());
					m.setTicketPrice(movie.getTicketPrice());
					m.setLanguage(movie.getLanguage());
					m.setShowtimes(movie.getShowtimes());
					m.setAvailableTickets(movie.getAvailableTickets());
					m.setActive(movie.isActive());
					return movieDao.save(m);
				}).orElseGet(()->{
					movie.setId(id);
					return movieDao.save(movie);
				});
	}

}
