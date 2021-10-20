package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.GenreDao;
import com.app.model.Genre;

@Service
public class GenreServiceImp implements GenreService{
	
	@Autowired
	GenreDao genreDao;

	@Override
	public List<Genre> getGenres() {
		return genreDao.findAll();
	}

	@Override
	public Optional<Genre> findGenreById(long id) {
		return genreDao.findById(id);
	}

	@Override
	public Genre addGenre(Genre genre) {
		return genreDao.save(new Genre(genre.getName()));
	}

	@Override
	public void deleteGenreById(long id) {
		genreDao.deleteById(id);
	}

	@Override
	public Genre updateGenre(Genre genre, long id) {
		return genreDao.findById(id).map(g ->{
			g.setName(genre.getName());
			return genreDao.save(g);
		}).orElseGet(() -> {
			genre.setId(id);
			return genreDao.save(genre);
		});
	}

}
