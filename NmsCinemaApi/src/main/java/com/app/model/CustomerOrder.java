package com.app.model;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.app.dao.OrderConverter;

@Entity
@Table(name="CustomerOrder")
public class CustomerOrder {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private long customerId;

    
    @Convert(converter = OrderConverter.class)
    @Column(columnDefinition ="LONGTEXT")
    private Map<String, Object> cart;


    public CustomerOrder() {
        super();
    }

    public CustomerOrder( long customerId, Map<String, Object> cart) {
        this.customerId = customerId;
        this.cart = cart;
    }

    public CustomerOrder(long id, long customerId, Map<String, Object> cart) {
        this.id = id;
        this.customerId = customerId;
        this.cart = cart;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCustomerId() {
        return this.customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public Map<String,Object> getCart() {
        return this.cart;
    }

    public void setCart(Map<String,Object> cart) {
        this.cart = cart;
    }
    
}
