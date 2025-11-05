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

        System.setProperty("EMAIL_NAME", mailName);
        System.setProperty("EMAIL_PASS", mailPass);
    }
}
