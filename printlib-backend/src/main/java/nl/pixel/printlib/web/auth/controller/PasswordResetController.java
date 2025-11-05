package nl.pixel.printlib.web.auth.controller;

import nl.pixel.printlib.domain.model.user.entity.PasswordResetToken;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.PasswordResetTokenRepository;
import nl.pixel.printlib.domain.model.user.service.UserService;
import nl.pixel.printlib.util.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class PasswordResetController {

    @Autowired
    EmailService service;
    @Autowired
    UserService userService;

    @Autowired
    PasswordResetTokenRepository tokenRepository;

    @PostMapping("/request-reset")
    public ResponseEntity<?> requestPasswordReset(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String token = UUID.randomUUID().toString();

        tokenRepository.save(new PasswordResetToken(email, token, LocalDateTime.now().plusHours(1)));

        service.sendPasswordResetMail(email, token);
        return ResponseEntity.ok("Password reset email sent");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> payload) {
        String token = payload.get("token");
        String newPassword = payload.get("newPassword");

        String email = Objects.requireNonNull(tokenRepository.findByToken(token).orElse(null)).getEmail() ;
        if (email == null || userService.findByEmail(email).isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid or expired token");
        }
        User user = userService.findByEmail(email).get();
        user.setPassword(newPassword);
        userService.update(user);
        tokenRepository.delete(Objects.requireNonNull(tokenRepository.findByToken(token).orElse(null))); // Invalidate token
        return ResponseEntity.ok("Password updated successfully");
    }
}
