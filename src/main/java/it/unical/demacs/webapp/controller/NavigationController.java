package it.unical.demacs.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {


    @GetMapping("/")
    public String homepage() { return "Home";
    }

    @GetMapping("/registrazione")
    public String regPage()
    { return "Register";
    }

    @GetMapping("/login")
    public String loginPage()
    { return "Login";
    }

    @GetMapping("/passwordimenticata")
    public String recuperaPass()
    { return "RecuperaPassword";
    }

    // Qui puoi aggiungere altre mappature per altre pagine

}
