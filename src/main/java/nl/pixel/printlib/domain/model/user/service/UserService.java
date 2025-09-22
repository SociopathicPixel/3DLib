package nl.pixel.printlib.domain.model.user.service;

import nl.pixel.printlib.domain.model.user.entity.User;

import java.util.Optional;

public interface UserService {
    public User registerUser(User user);
    public Optional<User> findByUsername(String username);
    public Optional<User> findByEmail(String email);
}
