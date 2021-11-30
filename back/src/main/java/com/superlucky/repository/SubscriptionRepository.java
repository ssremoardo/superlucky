package com.superlucky.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.superlucky.model.Subscription;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription,Long>{
    
}
