package nl.pixel.printlib.domain.model.user.service;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;

import java.util.Optional;

public interface UserService {
    User registerUser(User user) throws UserRegistrationException;
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

}
