package com.app.dao;

import java.util.Map;

import javax.persistence.AttributeConverter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class OrderConverter implements AttributeConverter<Map<String, Object>,String> {

    @Override
    public String convertToDatabaseColumn(Map<String, Object> cart) {
        String cartAsJson = null;

        try{
            ObjectMapper mapper = new ObjectMapper();
            cartAsJson = mapper.writeValueAsString(cart);
        } catch (final JsonProcessingException e){
        }
        
        return cartAsJson;
    }

    @Override
    public Map<String, Object> convertToEntityAttribute(String cartAsJson) {
        Map<String, Object> cart = null;

        try{
            ObjectMapper mapper = new ObjectMapper();
            cart = mapper.readValue(cartAsJson, Map.class);
        } catch (JsonProcessingException e){
            
        }
        
        return cart;
    }
    
    
}
