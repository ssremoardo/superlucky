package com.superlucky.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;

import lombok.Data;

@Entity
@Data
public class Winner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String name;
    @ManyToOne
    public Campaign campaign;
    @OneToOne
    public Subscription subscription;
    @OneToOne
    public Prize prize;
}
