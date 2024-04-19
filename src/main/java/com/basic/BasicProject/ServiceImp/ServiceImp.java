package com.basic.BasicProject.ServiceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.BasicProject.Entity.Customer;
import com.basic.BasicProject.Repository.CustomerRepo;
import com.basic.BasicProject.Service.CustomerService;

@Service
public class ServiceImp implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Override
    public Customer saveCustomer(Customer customer) {
        
        Customer customerData = new Customer();
        customerData.setName(customer.getName());
        customerData.setEmail(customer.getEmail());
        customerData.setPhoneNumber(customer.getPhoneNumber());

        return customerRepo.save(customerData);

    }


    @Override
    public List<Customer> retrieveTheCustomer()
    {
        return customerRepo.findAll();
    }

    @Override
    public void deleteCustomer(Long id)
    {
        customerRepo.deleteById(id);
    }
    
    @Override
    public boolean findById(Long id)
    {
        if(customerRepo.findById(id).isEmpty()) return false;
        return true;
    }


}
