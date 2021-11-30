package com.superlucky.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Contact {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public long id;
    public String name;
    public String phoneNumber;
}
