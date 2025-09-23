package nl.pixel.printlib.domain.model.user.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class UserController {
    @Autowired
    UserService service;

    public Optional<User> findByUsername(String username) { return service.findByUsername(username); }
    public Optional<User> findByEmail(String email) { return service.findByEmail(email); }
    public User register(User user) { return service.registerUser(user);}

}
