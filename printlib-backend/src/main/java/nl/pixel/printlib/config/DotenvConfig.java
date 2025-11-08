package nl.pixel.printlib.config;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DotenvConfig {

    @PostConstruct
    public void loadEnv() {
        Dotenv dotenv = Dotenv.configure().directory("../").load();
        String mailName = dotenv.get("EMAIL_NAME");
        String mailPass = dotenv.get("EMAIL_PASS");

        if (mailName != null && mailPass != null) {
            System.setProperty("EMAIL_NAME", mailName);
            System.setProperty("EMAIL_PASSWORD", mailPass);
        } else {
            throw new IllegalStateException("EMAIL_NAME or EMAIL_PASSWORD not found in .env");
        }

    }
}
