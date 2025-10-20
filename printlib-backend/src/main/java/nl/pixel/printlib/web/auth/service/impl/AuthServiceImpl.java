package nl.pixel.printlib.web.auth.service.impl;

import nl.pixel.printlib.config.JwtUtil;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;
import nl.pixel.printlib.domain.model.user.service.UserService;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AuthServiceImpl implements AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserService service;

    @Override
    public String authenticate(String username, String password) throws IOException {
        logger.info("Authenticating user: {}", username);
        boolean result =  service.findByUsername(username)
                .map(found -> encoder.matches(password, found.getPassword()))
                .orElse(false);
        logger.info("Authentication result for {}: {}", username, result);
        if (result) return jwtUtil.generateToken(username);
        else throw new IOException("User does not exist");
    }

    public boolean validateToken(String token) {
        return jwtUtil.validateToken(token);
    }

    public String getUsernameFromToken(String token) {
        return jwtUtil.extractUsername(token);
    }

    @Override
    public void delete(User user) {
        service.delete(user);
    }

    @Override
    public boolean register(User user) {
        try {
            service.registerUser(user);
            return true;
        } catch (UserRegistrationException e) {
            return false;
        }
    }
}
