package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

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
    public String processRegistration(@ModelAttribute User user, Model model) {
        try {
            service.registerUser(user);
            return "redirect:/login";
        } catch (UserRegistrationException ex) {
            model.addAttribute("error", ex.getMessage());
            return "register";
        }
    }
}
