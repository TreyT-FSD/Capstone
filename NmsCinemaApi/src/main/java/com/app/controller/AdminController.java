package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Admin;
import com.app.service.AdminServiceImp;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminServiceImp adminSvc;
	
	// @GetMapping("")
	// public ResponseEntity<List<Admin>> getAdmins(){
	// 	try {
	// 		List<Admin> admins = new ArrayList<Admin>();
	// 		adminSvc.getAdmins().forEach(admins::add);
			
	// 		if(admins.isEmpty()) {
	// 			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	// 		}
	// 		else {
	// 			return new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
	// 		}
			
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }
	
	@GetMapping("/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable long id){
		Optional<Admin> a = adminSvc.findAdminById(id);
		if(a.isPresent()) {
			return new ResponseEntity<>(a.get(),HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	@GetMapping("")
	public ResponseEntity<List<Admin>> getAdminByUsername(@RequestParam("username") Optional<String> username){
		if(username.isPresent()){
			return new ResponseEntity<List<Admin>>(adminSvc.findAdminByUsername(username.get()), HttpStatus.OK);
		}
		try {
			List<Admin> admins = new ArrayList<Admin>();
			adminSvc.getAdmins().forEach(admins::add);
			
			if(admins.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Admin> updateAdminById(@PathVariable long id, @RequestBody Admin newAdmin){
		Admin a = adminSvc.updateAdmin(newAdmin, id);
		if(a != null) {
			return new ResponseEntity<>(a,HttpStatus.OK);
		}
		return new ResponseEntity<>(a, HttpStatus.INTERNAL_SERVER_ERROR);
		
	}

}
