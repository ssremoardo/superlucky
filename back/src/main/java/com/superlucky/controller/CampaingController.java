package com.superlucky.controller;

import java.util.ArrayList;
import java.util.List;

import com.superlucky.model.Campaign;
import com.superlucky.repository.CampaignRepository;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/campaigns")
public class CampaingController {
    @Autowired
    public CampaignRepository campaignRepository;

    @CrossOrigin()
    @GetMapping()
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Campaign> getCampaigns(){
        return campaignRepository.findAll();
    }
}
