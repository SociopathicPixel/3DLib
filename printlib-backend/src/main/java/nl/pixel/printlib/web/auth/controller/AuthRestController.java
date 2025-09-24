package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    @Autowired
    AuthService service;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean success = service.authenticate(user);
        if (success) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        boolean success = service.register(user);
        if (success) {
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Username already exists");
        }
    }

}

