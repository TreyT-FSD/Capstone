package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Genre;

public interface GenreDao extends JpaRepository<Genre, Long> {}
