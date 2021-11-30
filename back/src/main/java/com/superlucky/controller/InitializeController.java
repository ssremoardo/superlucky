package com.superlucky.controller;

import java.util.ArrayList;
import java.util.List;

import com.superlucky.model.Campaign;
import com.superlucky.model.Prize;
import com.superlucky.repository.CampaignRepository;
import com.superlucky.repository.PrizeRepository;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class InitializeController {
    @Autowired
    public CampaignRepository campaignRepository;
    public PrizeRepository prizeRepository;

    @GetMapping(value="/init")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Boolean initDb(){
        Campaign superluck = new Campaign();
        superluck.title = "Superlucky";

        List<Prize> prizes = new ArrayList<Prize>();
        Prize p1 = new Prize();
        p1.title = "Prêmio 1";
        p1.description = "";
        prizes.add(p1);
        campaignRepository.save(superluck);
        return true;
    }
}
