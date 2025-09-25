package nl.pixel.printlib.web.auth.service.impl;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);

    @Autowired
    UserRepository repository;
    @Autowired
    PasswordEncoder encoder;

    @Override
    public boolean authenticate(User user) {
        logger.info("Authenticating user: {}", user.getUsername());
        boolean result =  repository.findByUsername(user.getUsername())
                .map(found -> encoder.matches(user.getPassword(), found.getPassword()))
                .orElse(false);
        logger.info("Authentication result for {}: {}", user.getUsername(), result);
        return result;
    }

    @Override
    public boolean register(User user) {
        logger.info("Attempting to register user: {}", user.getUsername());
        if (repository.findByUsername(user.getUsername()).isPresent()) {
            logger.warn("Registration failed: username '{}' already exists", user.getUsername());
            return false;
        }
        repository.save(user);
        logger.info("User '{}' registered successfully", user.getUsername());
        return true;
    }

}
