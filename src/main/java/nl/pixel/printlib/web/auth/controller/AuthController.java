package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.io.IOException;

@Controller
public class AuthController {

    @Autowired
    UserService service;

    @GetMapping("/register")
    public String showRegisterForm(Model model){
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String processRegistration(@ModelAttribute User user) {
        try {
            service.registerUser(user);
            return "redirect:/login";
        } catch (UserRegistrationException ex) {
            return "register";
        }
    }
}
