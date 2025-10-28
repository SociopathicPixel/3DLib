package nl.pixel.printlib.web.auth.service;

import nl.pixel.printlib.domain.model.user.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;

public interface AuthService {
    boolean register(@RequestBody User user);
    boolean authenticate(String username, String password) throws IOException;
    boolean validateToken(String token);
    String getUsernameFromToken(String token);

    void delete(User user);
}
