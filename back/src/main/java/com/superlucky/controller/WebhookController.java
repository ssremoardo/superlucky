package com.superlucky.controller;
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class WebhookController {
    @PostMapping(value="/consume")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void add(@RequestBody Object data){
        System.out.println(data);
    }
    
}
