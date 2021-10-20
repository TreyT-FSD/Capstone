package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.model.User;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	UserDao userDao;

	@Override
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@Override
	public Optional<User> findUserById(long id) {
		return userDao.findById(id);
	}

	@Override
	public User addUser(User user) {
		return userDao.save(
			new User(
				user.getFirstName(),
				user.getLastName(),
				user.getEmail(),
				user.getPassword(),
				user.getOrderNumbers()
			));
	}

	@Override
	public void deleteUserById(long id) {
		userDao.deleteById(id);
	}

	@Override
	public User updateUser(User user, long id) {
		
		return userDao.findById(id).map(
			u -> {
				u.setFirstName(user.getFirstName());
				u.setLastName(user.getLastName());
				u.setEmail(user.getEmail());
				u.setPassword(user.getPassword());
				u.setOrderNumbers(user.getOrderNumbers());
				return userDao.save(u);
			}).orElseGet( ()->{
				user.setId(id);
				return userDao.save(user);
			});
		
	}
	

}
