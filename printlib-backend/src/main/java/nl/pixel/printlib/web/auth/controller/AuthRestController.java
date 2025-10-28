package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.config.JwtUtil;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.web.auth.payload.LoginRequest;
import nl.pixel.printlib.web.auth.payload.LoginResponse;
import nl.pixel.printlib.web.auth.payload.RegisterRequest;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("/api/auth")
public class AuthRestController {
    private static final Logger logger = LoggerFactory.getLogger(AuthRestController.class);

    @Autowired
    AuthService service;
    @Autowired
    BCryptPasswordEncoder encoder;
    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) throws IOException {
        if (service.authenticate(request.getUsername(), request.getPassword())) {
            return ResponseEntity.ok(new LoginResponse(jwtUtil.generateToken(request.getUsername())));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (!service.validateNewPassword(request.getPassword(), request.getUsername())){
            return ResponseEntity.status(422).body("Password does not comply with password requirements.");
        }
        logger.info("Registering user: username={}, email={}", request.getUsername(), request.getEmail());
        User user = new User(request.getUsername(), encoder.encode(request.getPassword()), request.getEmail());
        boolean success = service.register(user);
        if (success) {
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Username already exists");
        }
    }

    @GetMapping("/register")
    public String showRegisterForm(Model model){
        model.addAttribute("user", new User());
        return "register";
    }
}
