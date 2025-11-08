package nl.pixel.printlib.util.email.service.impl;

import nl.pixel.printlib.util.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendPasswordResetMail(String toEmail, String token){
        SimpleMailMessage message= new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Password Reset Request");
        message.setText("Click the link to reset your password: http://localhost:3000/reset-password?token=" + token);
        message.setFrom(sender);
        mailSender.send(message);
    }

    @Override
    public String getSender() {
        return sender;
    }
}
