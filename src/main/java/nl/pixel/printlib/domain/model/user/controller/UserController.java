package nl.pixel.printlib.domain.model.user.controller;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public class UserController {

    @Autowired
    UserRepository repository;

    @Autowired
    PasswordEncoder encoder;

    public User setPassword(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return user;
    }

    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }
}
