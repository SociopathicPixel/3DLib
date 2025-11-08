package nl.pixel.printlib.util.email.service;

public interface EmailService {
    void sendPasswordResetMail(String toEmail, String token);
    String getSender();
}
