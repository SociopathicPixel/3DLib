package nl.pixel.printlib.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class TestExternalSources {

    @Test
    public void testEnvironmentSecretJwt() {
        Dotenv dotenv = Dotenv.configure().directory("../").load();
        String jwtSecret = dotenv.get("JWT_SECRET");
        assertNotNull(jwtSecret, "JWT_SECRET should be loaded from .env");
        assertFalse(jwtSecret.isEmpty(), "JWT_SECRET should not be empty");
    }
}
