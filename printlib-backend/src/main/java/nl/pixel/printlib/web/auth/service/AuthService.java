package nl.pixel.printlib.web.auth.service;

import nl.pixel.printlib.domain.model.user.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

public interface AuthService {
    boolean register(@RequestBody User user);
    boolean authenticate(String username, String password);
}
