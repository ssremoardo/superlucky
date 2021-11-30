package com.superlucky.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Entity
@Data
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String title;
    public Date startsAt;
    public Date endsAt;
    public Date sortitionAt;
    public boolean isActive;
    //@OneToMany
    //public List<Winner> winners;
    //@OneToMany
    //public List<Subscription> subscriptions;
    //@OneToMany
    //public Dictionary<Long,Prize> prizes;
}