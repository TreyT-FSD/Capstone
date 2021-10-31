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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.User;
import com.app.service.UserServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserServiceImp userSvc;

	// get all
	@GetMapping("")
	public ResponseEntity<List<User>> getUsers(@RequestParam("email") Optional<String> emailStr) {
		if (emailStr.isPresent()) {
			// query for the user by email
			return new ResponseEntity<List<User>>(userSvc.findUserByEmail(emailStr.get()), HttpStatus.OK);

		} else {

			try {
				List<User> users = new ArrayList<User>();
				userSvc.getUsers().forEach(users::add);

				if (users.isEmpty()) {
					return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
				} else {
					return new ResponseEntity<List<User>>(users, HttpStatus.OK);
				}
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}

	// get by id
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable long id) {
		Optional<User> user = userSvc.findUserById(id);
		if (user.isPresent()) {
			return new ResponseEntity<User>(user.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	// add
	@PostMapping("")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		User u = userSvc.addUser(new User(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(),
				user.getOrderNumbers()));
		if (u != null) {
			return new ResponseEntity<User>(u, HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// delete by id
	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteById(@PathVariable long id) {
		userSvc.deleteUserById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// update
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUserById(@PathVariable long id, @RequestBody User user) {
		User u = userSvc.updateUser(user, id);
		if (u != null) {
			return new ResponseEntity<User>(u, HttpStatus.OK);
		}
		return new ResponseEntity<>(u, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
