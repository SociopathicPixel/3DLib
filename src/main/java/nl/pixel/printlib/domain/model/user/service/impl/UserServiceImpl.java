package nl.pixel.printlib.domain.model.user.service.impl;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Optional;

public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository repository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    @Transactional
    public User registerUser(User user) throws UserRegistrationException {
        if (!isEncrypted(user.getPassword())) {
            user.setPassword(encoder.encode(user.getPassword()));
        }
        User savedUser = repository.save(user);
        if (savedUser.getId() == null) {
            throw new UserRegistrationException("User data could not be saved!");
        }
        return savedUser;
    }

    private boolean isEncrypted(String password) {
        // Our only check at this point is that the password length should be 60char long. (default HASH length)
        // We should make sure that given passwords that are unencrypted cannot be this length.
        return password.length() == 60;
    }
}
