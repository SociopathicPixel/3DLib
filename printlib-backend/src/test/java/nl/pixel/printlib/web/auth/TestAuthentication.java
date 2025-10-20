package nl.pixel.printlib.web.auth;

import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.domain.model.user.repository.UserRepository;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.apache.logging.log4j.LogManager;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
public class TestAuthentication {

    private static final Logger logger = LoggerFactory.getLogger(TestAuthentication.class);

    @Autowired
    AuthService service;
    @Autowired
    UserRepository repository;

    @Test
    public void testAuthenticationRegistrationPositive() {
        User user = new User();
        user.setUsername("TestUsername");
        user.setPassword("TestPassword");
        user.setEmail("test@email.com");

        assertTrue(service.register(user));
        assertTrue(repository.findByUsername(user.getUsername()).isPresent());
    }

    @Test
    public void testAuthenticationRegistrationNegative() {
        User user = new User();
        user.setUsername("TestUsername");
        user.setPassword("TestPassword");
        user.setEmail("test@email.com");
        assertTrue(service.register(user));
        assertFalse(service.register(user));
        assertTrue(repository.findByUsername(user.getUsername()).isPresent());

    }

    @Test
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void testAuthenticationLoginPositive() throws IOException {
        User user = new User();
        user.setUsername("TestUsername");
        user.setPassword("TestPassword");
        user.setEmail("test@email.com");
        try {
            service.register(user);
            assertTrue(repository.findByUsername(user.getUsername()).isPresent());
            assertNotNull(service.authenticate(user.getUsername(), user.getPassword()));
        } catch(Exception _) {}

        // Do to the nature of this test the cleanup should be done manually.
        service.delete(repository.findByUsername(user.getUsername()).orElse(null));
    }

    @Test
    public void testAuthenticationLoginNegative() {
        try{
            service.authenticate("fake", "fake");
            assert false : "Fake user was able to authenticate";
        } catch (IOException e) {
            assert true : "Fake user has been stopped";
        }
    }
}
