package nl.pixel.printlib.domain.model.user.service.impl;

import nl.pixel.printlib.domain.model.user.controller.UserController;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public class UserServiceImpl implements UserService {

    @Autowired
    UserController controller;

    @Override
    public User registerUser(User user) {
        return controller.setPassword(user);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return controller.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return controller.findByEmail(email);
    }
}
