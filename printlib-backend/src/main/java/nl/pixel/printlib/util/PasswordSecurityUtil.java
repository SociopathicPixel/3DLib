package nl.pixel.printlib.util;

import java.util.regex.Pattern;

public class PasswordSecurityUtil {

    public static boolean validateNewPassword(String password) {
        return Pattern.matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{8,}$", password);
    }
}
