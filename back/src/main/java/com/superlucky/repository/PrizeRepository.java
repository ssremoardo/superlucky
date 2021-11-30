package com.superlucky.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.superlucky.model.Prize;

@Repository
public interface PrizeRepository extends JpaRepository<Prize,Long>{
    
}
