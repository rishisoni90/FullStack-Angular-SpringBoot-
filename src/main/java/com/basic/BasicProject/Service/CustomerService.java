package com.basic.BasicProject.Service;

import java.util.List;

import com.basic.BasicProject.Entity.Customer;

public interface CustomerService {
    
    Customer saveCustomer(Customer customer);

    List<Customer> retrieveTheCustomer();

    void deleteCustomer(Long id);

    boolean findById(Long id);
}
