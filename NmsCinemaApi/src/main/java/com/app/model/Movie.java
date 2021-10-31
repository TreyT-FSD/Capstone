package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="movie")
public class Movie {
	
	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String title;
	
	@Column
	private String description;
	
	@Column(columnDefinition ="LONGTEXT")
	private String duration;
	
	@Column
	private long genreId;
	
	@Column
	private double ticketPrice;
	
	@Column
	private String language;
	
	@Column
	private String showtimes;
	
	@Column
	private long availableTickets;
	
	@Column
	private boolean active;
	

	public Movie() {
		super();
	}

	public Movie(String title, String description, String duration, long genreId, double ticketPrice, String language,
			String showtimes, long availableTickets, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.genreId = genreId;
		this.ticketPrice = ticketPrice;
		this.language = language;
		this.showtimes = showtimes;
		this.availableTickets = availableTickets;
		this.active = active;
	}

	public Movie(long id, String title, String description, String duration, long genreId, double ticketPrice,
			String language, String showtimes, long availableTickets, boolean active) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.genreId = genreId;
		this.ticketPrice = ticketPrice;
		this.language = language;
		this.showtimes = showtimes;
		this.availableTickets = availableTickets;
		this.active = active;
	}
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public long getGenreId() {
		return genreId;
	}

	public void setGenreId(long genreId) {
		this.genreId = genreId;
	}

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getShowtimes() {
		return showtimes;
	}

	public void setShowtimes(String showtimes) {
		this.showtimes = showtimes;
	}

	public long getAvailableTickets() {
		return availableTickets;
	}

	public void setAvailableTickets(long availableTickets) {
		this.availableTickets = availableTickets;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
