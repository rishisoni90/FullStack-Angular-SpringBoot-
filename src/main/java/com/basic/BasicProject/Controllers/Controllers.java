package com.basic.BasicProject.Controllers;



import java.security.Provider.Service;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basic.BasicProject.Entity.Customer;
import com.basic.BasicProject.Service.CustomerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://127.0.0.1:5500/")
public class Controllers {
   
    @Autowired
    CustomerService customerService;
   

    @PostMapping("/home")
    public String getMethodName() {
        return "Home";
    }
    
    /**
     * @param customerRequest
     * @return
     */
    @PostMapping("/saveCustomer")
public ResponseEntity<Customer> saveCustomer(@RequestBody String customerRequestJson) {
    ObjectMapper objectMapper = new ObjectMapper(); // ObjectMapper from Jackson library
    try {
        Customer customerRequest = objectMapper.readValue(customerRequestJson, Customer.class);
        // process the customerRequest as needed
        Customer savedCustomer = customerService.saveCustomer(customerRequest);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    } catch (JsonProcessingException e) {
        // Handle JSON parsing exception
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}


    @GetMapping("/retrieveCustomerInfo")
    public List<Customer> postMethodName() {

        List<Customer> customer = customerService.retrieveTheCustomer();
        //TODO: process POST request
        
        return customer;
    }

    /**
     * @param request
     * @return
     */
    @DeleteMapping("/deleteCustomer")
    public ResponseEntity<String> deleteCustomer(@RequestBody Map<String,Long> request)
    {   
        Long tempId = request.get("id");
        if(request.get("id") == null) return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        boolean foundId = customerService.findById(request.get("id"));
        if(!foundId)
        {
            return   new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    
        
        customerService.deleteCustomer(request.get("id"));

       
        return   ResponseEntity.ok("Customer id: "+ tempId +" Deleted");
    }
    


    

}
