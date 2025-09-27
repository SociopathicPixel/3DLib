package nl.pixel.printlib.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@Configuration
public class DynamicDataSourceConfig {

    private final String hostUrl = "jdbc:mysql://localhost:3306/";
    private final String dbName = "3D-PrintLib";
    private final String user = "root";
    private final String password = "root";

    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource() {
        try (
                Connection conn = DriverManager.getConnection(hostUrl + "?user=" + user + "&password=" + password);
                Statement stmt = conn.createStatement()){
            // Connect without specifying a database
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS `" + dbName + "`");
        } catch (Exception e) {
            throw new RuntimeException("Failed to create database: " + dbName, e);
        }
        // Now connect to the actual database
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl(hostUrl + dbName);
        ds.setUsername(user);
        ds.setPassword(password);
        return ds;
    }
}
