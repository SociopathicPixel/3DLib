package nl.pixel.printlib.web.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import nl.pixel.printlib.domain.model.user.entity.User;
import nl.pixel.printlib.web.auth.controller.AuthRestController;
import nl.pixel.printlib.web.auth.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
public class TestAuthRestAPI {

    private MockMvc mockMvc;
    private AuthService authService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(new AuthRestController()).build();
    }

    @Test
    public void registerPageIsAvailable() throws Exception {
        mockMvc.perform(get("/api/auth/register"))
                .andExpect(status().isOk());
    }

    @Test
    public void loginPageIsAvailable() throws Exception {
        mockMvc.perform(get("/api/auth/login"))
                .andExpect(status().isOk());
    }


}