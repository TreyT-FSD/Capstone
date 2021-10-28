package com.app.service;

import java.util.List;

import com.app.model.CustomerOrder;

public interface OrderService {
    public CustomerOrder addOrder(CustomerOrder order);
    public List<CustomerOrder> getOrders();
    public List<CustomerOrder> getOrdersByCustomerId(long id);
    
}
