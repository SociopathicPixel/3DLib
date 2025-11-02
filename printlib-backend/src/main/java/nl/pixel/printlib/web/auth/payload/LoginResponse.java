package nl.pixel.printlib.web.auth.payload;

import lombok.Getter;
import lombok.Setter;
import nl.pixel.printlib.domain.model.user.controller.UserController;
import nl.pixel.printlib.domain.model.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@Setter
@Getter
public class LoginResponse {
    private final String email;
    private final String token;
    private final String username;

    public LoginResponse(String token, String username, String email) {
        this.token = token;
        this.username= username;
        this.email = email;
    }
}
