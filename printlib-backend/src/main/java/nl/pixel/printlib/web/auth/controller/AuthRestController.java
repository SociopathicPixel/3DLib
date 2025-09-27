package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.web.auth.payload.LoginRequest;
import nl.pixel.printlib.web.auth.payload.RegisterRequest;
import nl.pixel.printlib.web.auth.service.AuthService;
import nl.pixel.printlib.web.auth.service.impl.AuthServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthRestController {
    private static final Logger logger = LoggerFactory.getLogger(AuthRestController.class);

    @Autowired
    AuthService service;
    @Autowired
    BCryptPasswordEncoder encoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        boolean success = service.authenticate(request.getUsername(), request.getPassword());
        if (success) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        logger.info("Registering user: username={}, email={}", request.getUsername(), request.getEmail());
        User user = new User(request.getUsername(), encoder.encode(request.getPassword()), request.getEmail());
        boolean success = service.register(user);
        if (success) {
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Username already exists");
        }
    }

}

