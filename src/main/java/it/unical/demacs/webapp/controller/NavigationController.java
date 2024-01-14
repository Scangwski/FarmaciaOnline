package it.unical.demacs.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {

    // Mappatura per la home page
    @GetMapping("/")
    public String homepage() { return "Home";
    }

    // Qui puoi aggiungere altre mappature per altre pagine

}
