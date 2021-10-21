package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.model.User;

public interface UserService {
	public List<User> getUsers();
	public Optional<User> findUserById(long id);
	public User addUser(User user);
	public void deleteUserById(long id);
	public User updateUser(User user, long id);

}
