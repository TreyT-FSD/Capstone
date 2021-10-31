package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.model.Admin;

public interface AdminService {

	public List<Admin> getAdmins();
	public Optional<Admin> findAdminById(long id);
	public List<Admin> findAdminByUsername(String username);
	public Admin addAdmin(Admin admin);
	public void deleteAdminById(long id);
	public Admin updateAdmin(Admin admin, long id);

}
