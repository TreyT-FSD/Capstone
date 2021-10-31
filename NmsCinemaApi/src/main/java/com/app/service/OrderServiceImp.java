package com.app.service;

import java.util.ArrayList;
import java.util.List;

import com.app.dao.OrderDao;
import com.app.model.CustomerOrder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    OrderDao orderDao;

    @Override
    public CustomerOrder addOrder(CustomerOrder order) {
        return orderDao.save(
            new CustomerOrder(
                order.getCustomerId(),
                order.getCart()
            ));
    }

    @Override
    public List<CustomerOrder> getOrdersByCustomerId(long id) {
        List<CustomerOrder> orders = new ArrayList<CustomerOrder>();

        orderDao.findAll().forEach(
            order->{
                if(order.getCustomerId() == id){
                    orders.add(order);
                }
        });
        return orders;
    }

    @Override
    public List<CustomerOrder> getOrders() {
        return orderDao.findAll();
    }

    
    
}
