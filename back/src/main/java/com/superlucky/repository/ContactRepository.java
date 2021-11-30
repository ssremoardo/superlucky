package com.superlucky.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.superlucky.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Long>{
    
}
