package nl.pixel.printlib.web.auth.service;

import nl.pixel.printlib.domain.model.user.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.util.Optional;

public interface AuthService {
    boolean register(@RequestBody User user);
    boolean authenticate(String username, String password) throws IOException;
    boolean validateToken(String token);
    boolean validateNewPassword(String password, String username);
    String getUsernameFromToken(String token);

    void delete(User user);

    Optional<User> getUserByUsername(String username);
}
