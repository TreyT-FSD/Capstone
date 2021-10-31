package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.app.model.CustomerOrder;
import com.app.service.OrderServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderServiceImp orderSvc;

    //add order
    @PostMapping("")
    public ResponseEntity<CustomerOrder> addOrder(@RequestBody CustomerOrder order){
        CustomerOrder o = orderSvc.addOrder(new CustomerOrder(order.getCustomerId(), order.getCart()));
         if(o != null){
             return new ResponseEntity<CustomerOrder>(o, HttpStatus.OK);
         }
         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    //getorderbycustomerid
    @GetMapping("")
    public ResponseEntity<List<CustomerOrder>> getOrdersByCustomerId(@RequestParam("customerId") Optional<String> customerId){
        if(customerId.isPresent()){
            return new ResponseEntity<List<CustomerOrder>>(orderSvc.getOrdersByCustomerId(Long.parseLong(customerId.get())),HttpStatus.OK);
        }
        else{
            try{
                List<CustomerOrder> orders = new ArrayList<CustomerOrder>();
                orderSvc.getOrders().forEach(orders::add);

                if(orders.isEmpty()){
                    return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
                }
                else{
                    return new ResponseEntity<List<CustomerOrder>>(orders, HttpStatus.OK);
                }
            } catch (Exception e){
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }


    }
    
}
