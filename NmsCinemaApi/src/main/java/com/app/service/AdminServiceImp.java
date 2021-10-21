package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDao;
import com.app.model.Admin;

@Service
public class AdminServiceImp implements AdminService {

	@Autowired
	AdminDao adminDao;

	@Override
	public List<Admin> getAdmins() {
		return adminDao.findAll();
	}

	@Override
	public Optional<Admin> findAdminById(long id) {
		return adminDao.findById(id);
	}

	@Override
	public Admin addAdmin(Admin admin) {
		return adminDao.save(new Admin(admin.getUsername(), admin.getPassword()));
	}

	@Override
	public void deleteAdminById(long id) {
		adminDao.deleteById(id);
	}

	@Override
	public Admin updateAdmin(Admin newAdmin, long id) {

		return adminDao.findById(id).map(admin -> {
			admin.setUsername(newAdmin.getUsername());
			admin.setPassword(newAdmin.getPassword());
			return adminDao.save(admin);
		}).orElseGet(() -> {
			newAdmin.setId(id);
			return adminDao.save(newAdmin);
		});
	}

}
