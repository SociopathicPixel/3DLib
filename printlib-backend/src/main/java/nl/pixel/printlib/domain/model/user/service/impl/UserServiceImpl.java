package nl.pixel.printlib.domain.model.user.service.impl;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.exception.UserRegistrationException;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.domain.model.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
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
        return password != null && password.length() == 60 &&
                (password.startsWith("$2a$") || password.startsWith("$2b$"));
    }
}
