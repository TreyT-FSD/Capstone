package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.model.Genre;

public interface GenreService {
	public List<Genre> getGenres();
	public Optional<Genre> findGenreById(long id);
	public Genre addGenre(Genre genre);
	public void deleteGenreById(long id);
	public Genre updateGenre(Genre genre, long id);
}
