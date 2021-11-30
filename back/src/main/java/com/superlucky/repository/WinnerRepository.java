package com.superlucky.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.superlucky.model.Winner;

@Repository
public interface WinnerRepository extends JpaRepository<Winner,Long>{
    
}
