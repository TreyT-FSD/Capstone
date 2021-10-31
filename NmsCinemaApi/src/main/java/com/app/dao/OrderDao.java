package com.app.dao;

import com.app.model.CustomerOrder;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDao extends JpaRepository<CustomerOrder, Long> {}
