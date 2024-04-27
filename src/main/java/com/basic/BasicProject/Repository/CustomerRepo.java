package com.basic.BasicProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.basic.BasicProject.Entity.Customer;


@Repository
public interface CustomerRepo extends JpaRepository<Customer,Long> {
    
}
