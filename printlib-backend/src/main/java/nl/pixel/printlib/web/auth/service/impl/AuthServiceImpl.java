package nl.pixel.printlib.web.auth.service.impl;

import nl.pixel.printlib.domain.model.user.controller.UserController;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepository repository;
    @Autowired
    PasswordEncoder encoder;

    @Override
    public boolean authenticate(User user) {
        String rawPass = user.getPassword();
        return repository.findByUsername(user.getUsername())
                .map(found -> encoder.matches(rawPass, found.getPassword()))
                .orElse(false);
    }

    @Override
    public boolean register(User user) {
        if (repository.findByUsername(user.getUsername()).isPresent()) {
            return false; // Username already taken
        }
        user.setPassword(encoder.encode(user.getPassword()));
        repository.save(user);
        return true;
    }

}
